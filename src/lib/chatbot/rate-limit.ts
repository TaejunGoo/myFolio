const DEFAULT_MAX_REQUESTS = 8;
const DEFAULT_WINDOW_SECONDS = 60;

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

declare global {
  var __portfolioChatRateLimitStore: Map<string, RateLimitEntry> | undefined;
}

const rateLimitStore = globalThis.__portfolioChatRateLimitStore ??= new Map<string, RateLimitEntry>();

const getWindowSeconds = () => {
  return Number(process.env.CHAT_RATE_LIMIT_WINDOW_SECONDS ?? DEFAULT_WINDOW_SECONDS);
};

const getMaxRequests = () => {
  return Number(process.env.CHAT_RATE_LIMIT_MAX_REQUESTS ?? DEFAULT_MAX_REQUESTS);
};

const getRateLimitKey = (clientId: string) => {
  return `chat-rate-limit:${clientId}`;
};

const cleanupExpiredEntries = (now: number) => {
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }
};

export interface RateLimitResult {
  limited: boolean;
  limit: number;
  remaining: number;
  retryAfter: number;
}

export const enforceChatRateLimit = async (clientId: string): Promise<RateLimitResult> => {
  const limit = getMaxRequests();
  const windowSeconds = getWindowSeconds();
  const now = Date.now();
  const windowMs = windowSeconds * 1000;

  cleanupExpiredEntries(now);

  const key = getRateLimitKey(clientId);
  const currentEntry = rateLimitStore.get(key);

  if (!currentEntry || currentEntry.resetAt <= now) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + windowMs,
    });

    return {
      limited: false,
      limit,
      remaining: Math.max(0, limit - 1),
      retryAfter: windowSeconds,
    };
  }

  currentEntry.count += 1;

  const retryAfter = Math.max(1, Math.ceil((currentEntry.resetAt - now) / 1000));
  const remaining = Math.max(0, limit - currentEntry.count);

  return {
    limited: currentEntry.count > limit,
    limit,
    remaining,
    retryAfter,
  };
};
