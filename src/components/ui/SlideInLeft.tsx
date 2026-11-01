'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

export default function SlideInLeft({ children, delay = 0, duration = 1.8, className = '' }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className={`block ${className}`}
      initial={{ opacity: 0, x: reduce ? 0 : -120 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: reduce ? 0 : duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  );
}
