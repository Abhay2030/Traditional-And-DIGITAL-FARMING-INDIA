import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function TricolorBorders() {
  const reduced = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none z-50" aria-hidden="true">
      {/* Left Border */}
      <div className="absolute top-0 bottom-0 left-0 w-1 md:w-1.5 flex flex-col opacity-90">
        <div className="flex-1 bg-gradient-to-b from-[var(--color-saffron)] to-transparent" />
        <div className="flex-1 bg-gradient-to-b from-white/80 via-white/80 to-transparent" />
        <div className="flex-1 bg-gradient-to-t from-[var(--color-india-green)] to-transparent" />
      </div>

      {/* Right Border */}
      <div className="absolute top-0 bottom-0 right-0 w-1 md:w-1.5 flex flex-col opacity-90">
        <div className="flex-1 bg-gradient-to-b from-[var(--color-saffron)] to-transparent" />
        <div className="flex-1 bg-gradient-to-b from-white/80 via-white/80 to-transparent" />
        <div className="flex-1 bg-gradient-to-t from-[var(--color-india-green)] to-transparent" />
      </div>

      {/* Animated Light Flow - Left */}
      {!reduced && (
        <motion.div
          className="absolute left-0 w-4 h-[30vh] blur-md"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.4), transparent)',
          }}
          animate={{ top: ['-30%', '130%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {/* Animated Light Flow - Right */}
      {!reduced && (
        <motion.div
          className="absolute right-0 w-4 h-[30vh] blur-md"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.4), transparent)',
          }}
          animate={{ top: ['-30%', '130%'] }}
          transition={{ duration: 12, delay: 5, repeat: Infinity, ease: 'linear' }}
        />
      )}
      
      {/* Soft edge glow */}
      <div className="absolute inset-0 shadow-[inset_15px_0_40px_rgba(255,153,51,0.03),inset_-15px_0_40px_rgba(19,136,8,0.03)]" />
    </div>
  );
}
