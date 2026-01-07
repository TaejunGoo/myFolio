"use client";

import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Blob 1 */}
      <motion.div
        className="absolute -left-20 -top-20 size-96 rounded-full bg-gradient-to-br from-blue-400/15 to-purple-500/15 blur-3xl dark:from-blue-600/10 dark:to-purple-700/10"
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
        className="absolute right-0 top-1/4 size-[28rem] rounded-full bg-gradient-to-br from-cyan-400/12 to-blue-500/12 blur-3xl dark:from-cyan-600/8 dark:to-blue-700/8"
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
        className="absolute bottom-20 left-1/3 size-80 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-500/10 blur-3xl dark:from-purple-600/8 dark:to-pink-700/8"
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
        className="absolute -right-32 bottom-0 size-[32rem] rounded-full bg-gradient-to-br from-indigo-400/10 to-purple-600/10 blur-3xl dark:from-indigo-600/8 dark:to-purple-800/8"
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
