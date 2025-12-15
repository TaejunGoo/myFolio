"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export const HeaderBackground = () => {
  const { scrollY } = useScroll();
  // 스크롤 0px ~ 50px 구간에서 투명도가 0 -> 1로 변함
  const opacity = useTransform(scrollY, [0, 50], [0, 1]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 -z-10 bg-linear-to-t to-background/50 mask-[linear-gradient(to_bottom,black_70%,transparent)] backdrop-blur-sm" />
  );
};
export default HeaderBackground;
