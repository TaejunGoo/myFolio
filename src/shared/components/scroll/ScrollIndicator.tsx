"use client";

import { useEffect } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { throttle } from "lodash-es";

/**
 * ScrollIndicator Component
 *
 * A fixed progress bar at the top of the page that shows scroll progress.
 * Automatically adapts to dynamic content height changes (e.g., "Load More" buttons).
 *
 * Features:
 * - Fixed at the top of the viewport
 * - Smooth spring animation with MotionValue (no re-renders)
 * - Throttled scroll listener for better performance
 * - Responds to window resize and content changes
 * - High z-index to stay above other content
 */
const ScrollIndicator = () => {
  // Use MotionValue instead of state to avoid re-renders
  const scrollYProgress = useMotionValue(0);

  // Apply smooth spring animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = window.scrollY;
      const winHeightPx = window.innerHeight;
      const docHeightPx = document.documentElement.scrollHeight;

      const scrolled = scrollPx / (docHeightPx - winHeightPx);
      const progress = Math.min(Math.max(scrolled, 0), 1);

      // Directly update MotionValue without triggering re-render
      scrollYProgress.set(progress);
    };

    // Throttle scroll updates to 16ms (~60fps)
    const throttledUpdate = throttle(updateScrollProgress, 16);

    // Initial calculation
    updateScrollProgress();

    // Listen to scroll events (throttled)
    window.addEventListener("scroll", throttledUpdate, { passive: true });

    // Listen to resize events (handles content height changes)
    window.addEventListener("resize", updateScrollProgress, { passive: true });

    // Observe document body changes (handles dynamic content)
    const resizeObserver = new ResizeObserver(() => {
      updateScrollProgress();
    });

    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("scroll", throttledUpdate);
      window.removeEventListener("resize", updateScrollProgress);
      resizeObserver.disconnect();
      throttledUpdate.cancel(); // Cancel pending throttled calls
    };
  }, [scrollYProgress]);

  return (
    <div className="pointer-events-none absolute top-0 left-0 h-[3px] w-full bg-transparent">
      <motion.div
        className="h-full origin-left bg-foreground/30"
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollIndicator;
