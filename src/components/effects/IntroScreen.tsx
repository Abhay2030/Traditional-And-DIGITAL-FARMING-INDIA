import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { AshokaChakra } from '../ui/AshokaChakra';

interface IntroScreenProps {
  onComplete: () => void;
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const reduced = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);

  // Fallback to ensure onComplete fires even if animation fails
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 100); // Give a tiny buffer for React to unmount
    }, 10100);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0f1c] overflow-hidden text-center px-4"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: reduced ? 1 : 1.05 }}
      transition={{ delay: 9.0, duration: 1.0, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      aria-label="Cinematic intro sequence"
    >
      {/* Background Atmosphere (0.0s - 0.8s fade in) */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(255, 153, 51, 0.12) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(19, 136, 8, 0.12) 0%, transparent 50%)'
        }} />
        
        {/* Subtle Light Rays */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="introRay" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="0,0 20,0 45,100 25,100" fill="url(#introRay)" />
          <polygon points="40,0 55,0 80,100 65,100" fill="url(#introRay)" opacity="0.6" />
        </svg>

        {/* Massive Background Chakra */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
          animate={reduced ? {} : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <AshokaChakra size={minVW(900)} color="#ffffff" spinning={false} />
        </motion.div>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto w-full h-full pt-10 pb-12">
        
        {/* Animated Flag (Appears at start) */}
        <motion.div
          className="mb-6 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Simple elegant CSS waving flag */}
          <motion.div 
            className="w-16 h-10 md:w-20 md:h-12 rounded-sm overflow-hidden flex flex-col shadow-lg shadow-black/50 border border-white/10 origin-left"
            animate={reduced ? {} : { 
              rotateY: [0, 15, 0, -10, 0],
              skewY: [0, 2, 0, -2, 0] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ perspective: 1000 }}
          >
            <div className="flex-1 bg-[#FF9933]" />
            <div className="flex-1 bg-white flex items-center justify-center relative">
              <AshokaChakra size={16} color="#000080" spinning={false} />
            </div>
            <div className="flex-1 bg-[#138808]" />
          </motion.div>
        </motion.div>

        {/* 0.8s - 1.8s: College Name */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
          className="mb-4"
        >
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: 'var(--font-display)', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            Sir Visvesvaraya Institute of Technology
          </h1>
          <div className="text-sm md:text-lg text-[var(--color-saffron-light)] font-semibold tracking-[0.3em] mt-2 uppercase">
            Nashik
          </div>
        </motion.div>

        {/* 1.8s - 2.8s: Department */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 1.5, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          <div className="text-sm md:text-base text-white/80 font-medium tracking-wide">
            Department of Computer Engineering
          </div>
          <div className="text-xs md:text-sm text-[var(--color-india-green-light)] font-bold tracking-wider mt-1 uppercase">
            Second Year
          </div>
        </motion.div>

        {/* 2.8s - 3.8s: Proudly Presents */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4.5, duration: 2.0, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="text-[10px] md:text-xs text-white/50 tracking-[0.4em] uppercase mb-4">
            Proudly Presents
          </div>
          <div className="text-xs md:text-sm text-white/90 font-bold tracking-[0.2em] uppercase">
            15 August 2026
          </div>
        </motion.div>

        {/* 3.8s - 4.6s: Independence Day Celebration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 6.5, duration: 2.0, ease: "easeOut" }}
          className="mt-2"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808] uppercase tracking-tight" style={{ fontFamily: 'var(--font-display)', textShadow: '0 4px 40px rgba(255,153,51,0.2)' }}>
            Independence Day<br />
            <span className="text-white text-2xl md:text-4xl lg:text-5xl tracking-widest">Celebration</span>
          </h2>
        </motion.div>
      </div>

      {/* Skip Button */}
      <button 
        onClick={onComplete}
        className="absolute bottom-6 right-6 text-[10px] text-white/30 uppercase tracking-widest hover:text-white/60 transition-colors z-20"
      >
        Skip Intro &rarr;
      </button>
    </motion.div>
  );
}

// Helper to prevent chakra overflow bugs on very small screens
function minVW(val: number) {
  if (typeof window === 'undefined') return val;
  return Math.min(val, window.innerWidth * 1.5);
}
