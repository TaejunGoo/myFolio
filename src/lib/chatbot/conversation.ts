import {
  CHAT_MAX_REQUEST_MESSAGES,
  CHAT_MESSAGE_TEXT_MAX_LENGTH,
  CHAT_TOTAL_INPUT_TEXT_MAX_LENGTH,
} from "./constants";

interface ConversationMessage {
  parts: readonly { type: string; text?: string }[];
}

export const isConversationLimitExceeded = (messages: readonly ConversationMessage[]): boolean => {
  if (messages.length > CHAT_MAX_REQUEST_MESSAGES) return true;

  let totalLength = 0;

  for (const message of messages) {
    for (const part of message.parts) {
      if (part.type !== "text") continue;
      const length = part.text?.trim().length ?? 0;
      if (length > CHAT_MESSAGE_TEXT_MAX_LENGTH) return true;
      totalLength += length;
    }
  }

  return totalLength > CHAT_TOTAL_INPUT_TEXT_MAX_LENGTH;
};
