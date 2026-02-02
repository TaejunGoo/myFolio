"use client";

import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Blob 1 */}
      <motion.div
        className="absolute -top-20 -left-20 size-96 rounded-full bg-gradient-to-br from-sky-200/18 to-violet-300/18 blur-3xl dark:from-blue-600/18 dark:to-purple-700/18"
        animate={{
          x: [0, 100, 0],
          y: [0, 150, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute top-1/4 right-0 size-112 rounded-full bg-gradient-to-br from-cyan-200/15 to-blue-300/15 blur-3xl dark:from-cyan-600/15 dark:to-blue-700/15"
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute bottom-20 left-1/3 size-80 rounded-full bg-gradient-to-br from-purple-200/15 to-pink-300/15 blur-3xl dark:from-purple-600/15 dark:to-pink-700/15"
        animate={{
          x: [0, -120, 0],
          y: [0, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Blob 4 */}
      <motion.div
        className="absolute -right-32 bottom-0 size-128 rounded-full bg-gradient-to-br from-indigo-200/16 to-purple-300/16 blur-3xl dark:from-indigo-600/16 dark:to-purple-800/16"
        animate={{
          x: [0, 60, 0],
          y: [0, -100, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
