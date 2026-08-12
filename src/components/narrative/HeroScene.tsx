import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { AshokaChakra } from '../ui/AshokaChakra';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useAudio } from '../../contexts/AudioContext';
import { audioManager } from '../../lib/audioManager';

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const { setMusicState } = useAudio();

  useEffect(() => {
    // When the hero mounts, we establish the initial musical state.
    // The user's audio controls will dictate if this actually emits sound.
    setMusicState('TRADITION');
  }, [setMusicState]);

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-[200dvh]" id="hero" aria-label="Digital Farming India - Hero">
      {/* Sticky hero container */}
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        {/* Background layers with parallax */}
        <motion.div
          className="absolute inset-0 bg-[#02050A]"
          style={reduced ? {} : { y: bgY, scale }}
        >
          {/* Tech Grid Overlay */}
          <div 
            className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50"
            style={{ maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)' }}
          />

          {/* Animated Cinematic Mesh Gradients */}
          <motion.div 
            className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] rounded-full mix-blend-screen filter blur-[140px] opacity-40"
            style={{ background: 'radial-gradient(circle, var(--color-saffron) 0%, transparent 60%)' }}
            animate={reduced ? {} : { 
              scale: [1, 1.1, 1], 
              x: [0, 40, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div 
            className="absolute -bottom-[20%] -right-[10%] w-[80vw] h-[80vw] rounded-full mix-blend-screen filter blur-[140px] opacity-30"
            style={{ background: 'radial-gradient(circle, var(--color-india-green) 0%, transparent 60%)' }}
            animate={reduced ? {} : { 
              scale: [1, 1.2, 1], 
              x: [0, -40, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.div 
            className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] rounded-full mix-blend-overlay filter blur-[100px] opacity-20"
            style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }}
            animate={reduced ? {} : { scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Massive Glowing Ashoka Chakra */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none mix-blend-screen"
            style={{ y: titleY, filter: 'drop-shadow(0 0 120px rgba(255,255,255,0.6))' }}
            animate={reduced ? {} : { rotate: 360 }}
            transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
          >
            <AshokaChakra size={1100} color="#ffffff" spinning={false} />
          </motion.div>
          
          {/* Secondary Chakra for Depth */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none"
            style={{ y: titleY }}
            animate={reduced ? {} : { rotate: -360 }}
            transition={{ duration: 240, repeat: Infinity, ease: 'linear' }}
          >
            <AshokaChakra size={1500} color="#ffffff" spinning={false} />
          </motion.div>

          {/* Subtle angled SVG light rays (Cinematic lighting) */}
          <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none mix-blend-overlay" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="rayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="0,0 20,0 40,100 10,100" fill="url(#rayGrad)" />
            <polygon points="30,0 45,0 75,100 50,100" fill="url(#rayGrad)" opacity="0.6" />
            <polygon points="60,0 80,0 100,100 70,100" fill="url(#rayGrad)" opacity="0.4" />
          </svg>
        </motion.div>

        {/* Floating particles — Data points */}
        {!reduced && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Glowing Tech Orbs */}
            {[
              { left: '15%', top: '20%', delay: 0, color: 'var(--color-saffron)' },
              { left: '25%', top: '78%', delay: 2.5, color: 'var(--color-sensor-cyan)' },
              { left: '80%', top: '22%', delay: 1, color: 'var(--color-india-green)' },
              { left: '75%', top: '65%', delay: 3.5, color: 'var(--color-saffron)' },
            ].map((orb, i) => (
              <motion.div
                key={`orb-${i}`}
                className="absolute w-2 h-2 rounded-full"
                style={{ left: orb.left, top: orb.top, backgroundColor: orb.color, boxShadow: `0 0 20px 4px ${orb.color}80` }}
                animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 6 + i, delay: orb.delay, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}

            {/* Drone Scanning Line */}
            <motion.div
              className="absolute left-0 top-[35%] w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-sensor-cyan)] to-transparent"
              animate={{ x: ['-100vw', '100vw'], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 15, delay: 2, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-4 h-4 border border-[var(--color-sensor-cyan)]/50 rounded-full animate-ping" />
            </motion.div>
          </div>
        )}

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] z-0" />

        {/* Tricolour ribbon — top */}
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <div className="flex-1 bg-[var(--color-saffron)]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[var(--color-india-green)]" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
          style={reduced ? {} : { y: titleY, opacity: titleOpacity }}
        >
          {/* 3D Independence Day Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={reduced ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -8, 0] }}
            transition={reduced ? { delay: 0.3, duration: 0.8 } : { y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, opacity: { delay: 0.3, duration: 0.8 } }}
            className="mb-8 relative group cursor-default"
          >
            {/* Outer Animated Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-saffron)] via-white to-[var(--color-india-green)] rounded-full blur-md opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse" />
            
            <div className="relative inline-flex items-center gap-4 px-6 py-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_2px_10px_rgba(255,255,255,0.2),inset_0_-2px_10px_rgba(255,255,255,0.05)] overflow-hidden">
              {/* Internal Glass Shine */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50" />
              
              <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/30 shadow-inner">
                <span className="text-lg drop-shadow-md">🇮🇳</span>
              </div>
              
              <div className="text-left relative z-10 border-l border-white/20 pl-4">
                <div className="text-[10px] font-black tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-saffron)] via-white to-[var(--color-india-green)] uppercase">
                  15 August 2026
                </div>
                <div className="text-sm font-bold text-white tracking-wide drop-shadow-md">
                  80th Independence Day
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.95] drop-shadow-[0_10px_50px_rgba(0,0,0,0.8)] relative z-10"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">DIGITAL</span><br />
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-india-green)] to-[var(--color-saffron)] blur-[40px] opacity-40 mix-blend-screen" />
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#4CAF50] via-[#8BC34A] to-[#FF9800] drop-shadow-[0_0_20px_rgba(139,195,74,0.5)]">
                FARMING
              </span>
            </span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-white/50 via-white to-white">INDIA</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 md:mt-8"
          >
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-white/90 tracking-wide">
              SMART TODAY. <span className="text-[var(--color-leaf-light)]">SUSTAINABLE TOMORROW.</span>
            </p>
          </motion.div>

          {/* Emotional statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8"
          >
            <p className="text-base md:text-lg text-white/70 italic max-w-lg mx-auto">
              "The future of India grows from its soil."
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#technology-hub"
              onMouseEnter={() => audioManager.playSFX('ui_hover')}
              onClick={() => audioManager.playSFX('ui_click')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-agriculture)] text-white font-semibold rounded-full hover:bg-[var(--color-agriculture-light)] transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              Explore the Smart Farm
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#traditional-knowledge"
              onMouseEnter={() => audioManager.playSFX('ui_hover')}
              onClick={() => audioManager.playSFX('ui_click')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all active:scale-95"
            >
              Start the Story
              <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Ashoka Chakra watermark */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20">
            <AshokaChakra size={50} color="white" spinning={!reduced} />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] text-white/50 uppercase">Scroll to explore</span>
            <ChevronDown size={16} className="text-white/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
