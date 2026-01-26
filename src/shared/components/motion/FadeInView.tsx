"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

import { cn } from "@/shared/utils";

interface FadeInViewProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "transition"> {
  /**
   * Animation delay in seconds
   * @default 0
   */
  delay?: number;
  /**
   * Animation duration in seconds
   * @default 0.4
   */
  duration?: number;
  /**
   * Initial y offset in pixels
   * @default 20
   */
  yOffset?: number;
  /**
   * Viewport margin for triggering animation
   * @default "-100px"
   */
  viewportMargin?: string;
  /**
   * Viewport amount (0-1) for triggering animation
   * @default 0.2
   */
  viewportAmount?: number;
  /**
   * Whether to play animation only once
   * @default true
   */
  once?: boolean;
}

/**
 * FadeInView Component
 *
 * A reusable scroll-triggered fade-in animation wrapper.
 * Fades in content with a subtle upward slide when it enters the viewport.
 *
 * Features:
 * - Fade-in + Slide-up animation
 * - Customizable delay, duration, and offset
 * - Viewport-based triggering
 * - Smooth easing curve
 *
 * @example
 * ```tsx
 * <FadeInView delay={0.1}>
 *   <Card>Content here</Card>
 * </FadeInView>
 * ```
 */
const FadeInView = ({
  children,
  delay = 0,
  duration = 0.4,
  yOffset = 20,
  viewportMargin = "0px",
  viewportAmount = 0.2,
  once =  true,
  className,
  ...props
}: FadeInViewProps) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        margin: viewportMargin,
        amount: viewportAmount,
        once,
      }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;
