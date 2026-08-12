import { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export function PatrioticParticles() {
  const reduced = useReducedMotion();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const particles = useMemo(() => {
    if (windowSize.width === 0) return [];
    
    const count = windowSize.width < 768 ? 15 : 30;
    const colors = [
      'rgba(255, 153, 51, 0.6)', // Saffron
      'rgba(255, 255, 255, 0.6)', // White
      'rgba(19, 136, 8, 0.6)',    // Green
    ];

    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2, // 2px to 6px
      duration: Math.random() * 20 + 20, // 20s to 40s
      delay: Math.random() * -20, // Start at different times
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [windowSize.width]);

  if (reduced || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full blur-[1px]"
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
          animate={{
            y: [0, -windowSize.height * 0.5, -windowSize.height],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
