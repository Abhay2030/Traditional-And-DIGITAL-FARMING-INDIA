import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({ children, direction = 'up', delay = 0, duration = 0.7, className = '', once = true }: ScrollRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.12, triggerOnce: once });
  const reduced = useReducedMotion();

  const offsets = { up: { y: 60 }, down: { y: -60 }, left: { x: 60 }, right: { x: -60 }, none: {} };
  const initial = reduced ? { opacity: 0 } : { opacity: 0, ...offsets[direction] };
  const animate = isInView ? { opacity: 1, x: 0, y: 0 } : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: reduced ? 0.15 : duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
