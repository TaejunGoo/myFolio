"use client";

import { createContext, useCallback, useContext, useState } from "react";

interface FloatingChatContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const FloatingChatContext = createContext<FloatingChatContextValue | null>(null);

export const FloatingChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <FloatingChatContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </FloatingChatContext.Provider>
  );
};

export const useFloatingChat = () => {
  const ctx = useContext(FloatingChatContext);
  if (!ctx) {
    throw new Error("useFloatingChat must be used within FloatingChatProvider");
  }
  return ctx;
};
