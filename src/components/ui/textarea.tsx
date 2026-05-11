import * as React from "react";

import { cn } from "@/shared/utils";

interface TextareaProps extends React.ComponentProps<"textarea"> {
  autoResize?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({
  autoResize = false,
  className,
  onChange,
  rows,
  style,
  value,
  ...props
}, forwardedRef) => {
  const innerRef = React.useRef<HTMLTextAreaElement | null>(null);

  const setRefs = React.useCallback((node: HTMLTextAreaElement | null) => {
    innerRef.current = node;

    if (typeof forwardedRef === "function") {
      forwardedRef(node);
      return;
    }

    if (forwardedRef) {
      forwardedRef.current = node;
    }
  }, [forwardedRef]);

  const resizeToFit = React.useCallback(() => {
    if (!autoResize || !innerRef.current) {
      return;
    }

    innerRef.current.style.height = "0px";
    innerRef.current.style.height = `${innerRef.current.scrollHeight}px`;
  }, [autoResize]);

  React.useEffect(() => {
    resizeToFit();
  }, [resizeToFit, value]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (autoResize) {
      event.currentTarget.style.height = "0px";
      event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`;
    }

    onChange?.(event);
  };

  return (
    <textarea
      ref={setRefs}
      data-slot="textarea"
      rows={rows ?? 1}
      style={style}
      value={value}
      className={cn(
        `
          w-full rounded-xl border border-border/70 bg-background/80 px-4 py-3 text-sm shadow-xs outline-none transition-[border-color,box-shadow]
          placeholder:text-muted-foreground/80 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30
          disabled:cursor-not-allowed disabled:opacity-50
        `,
        autoResize && "min-h-0 resize-none overflow-hidden",
        className,
      )}
      onChange={handleChange}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
