'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[101] transform-gpu"
      style={{ scaleX, backgroundImage: 'linear-gradient(90deg, #a64dff 0%, #ffffff 25%, #ff8c42 50%, #55D5E7 75%, #ffffff 100%)' }}
    />
  );
}
