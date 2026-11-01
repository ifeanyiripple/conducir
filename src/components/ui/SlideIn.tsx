'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '@/lib/hex';

/* Slides in from the left or right when scrolled into view */
export default function SlideIn({
  children,
  from = 'left',
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  from?: 'left' | 'right';
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const x = reduce ? 0 : from === 'left' ? -120 : 120;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduce ? 0 : 1.4, delay: reduce ? 0 : delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
