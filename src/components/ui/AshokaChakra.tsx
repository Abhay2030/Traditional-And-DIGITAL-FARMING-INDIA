import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface AshokaChakraProps {
  size?: number;
  color?: string;
  spinning?: boolean;
  className?: string;
}

export function AshokaChakra({ size = 80, color = '#1A237E', spinning = true, className = '' }: AshokaChakraProps) {
  const reduced = useReducedMotion();
  const spokes = 24;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size / 2 - 2;
  const innerR = outerR * 0.15;
  const spokeLength = outerR * 0.82;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      animate={spinning && !reduced ? { rotate: 360 } : {}}
      transition={spinning && !reduced ? { duration: 30, repeat: Infinity, ease: 'linear' } : {}}
      aria-label="Ashoka Chakra"
      role="img"
    >
      {/* Outer circle */}
      <circle cx={cx} cy={cy} r={outerR} fill="none" stroke={color} strokeWidth={size * 0.025} />
      
      {/* Inner hub */}
      <circle cx={cx} cy={cy} r={innerR} fill={color} />
      
      {/* 24 Spokes */}
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i * 360) / spokes - 90;
        const rad = (angle * Math.PI) / 180;
        const x2 = cx + Math.cos(rad) * spokeLength;
        const y2 = cy + Math.sin(rad) * spokeLength;
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth={size * 0.015}
          />
        );
      })}
      
      {/* Small crescents between spokes */}
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = ((i + 0.5) * 360) / spokes - 90;
        const rad = (angle * Math.PI) / 180;
        const dotR = outerR * 0.7;
        const dotX = cx + Math.cos(rad) * dotR;
        const dotY = cy + Math.sin(rad) * dotR;
        return (
          <circle
            key={`dot-${i}`}
            cx={dotX}
            cy={dotY}
            r={size * 0.012}
            fill={color}
          />
        );
      })}
    </motion.svg>
  );
}
