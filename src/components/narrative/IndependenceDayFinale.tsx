import { motion, useInView } from 'motion/react';
import { useRef, useEffect } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { audioManager } from '../../lib/audioManager';

export function IndependenceDayFinale() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      audioManager.setMusicState('INDEPENDENCE_DAY');
    }
  }, [isInView]);

  return (
    <section ref={ref} id="finale" className="relative min-h-[100dvh] w-full overflow-hidden bg-black flex flex-col items-center justify-center">
      
      {/* Background Image: Sunset Field */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/finale_sunset_bg.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Subtle Tricolor Glow in Sky */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 153, 51, 0.4) 0%, transparent 40%, transparent 60%, rgba(19, 136, 8, 0.4) 100%)'
        }}
        animate={reduced ? {} : { opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Cinematic Text Sequence */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl">
        
        {/* Sequence 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-20%", once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest leading-tight" style={{ fontFamily: 'var(--font-display)', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
            <span className="text-white/60 text-xl md:text-3xl block mb-2">From the Soil</span>
            To the Smart Farm
          </h2>
        </motion.div>

        {/* Sequence 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-30%", once: false }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-widest leading-tight" style={{ fontFamily: 'var(--font-display)', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
            <span className="text-white/60 text-xl md:text-3xl block mb-2">From Heritage</span>
            To Intelligence
          </h2>
        </motion.div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ margin: "-40%", once: false }}
          transition={{ duration: 2, delay: 1.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-saffron)] via-white to-[var(--color-india-green)] uppercase tracking-tighter mb-8" style={{ fontFamily: 'var(--font-display)', filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))' }}>
            The Future Is Growing.
          </h1>
          
          <div className="text-4xl mb-4">🇮🇳</div>
          
          <div className="text-white/90 font-bold tracking-[0.3em] uppercase text-sm md:text-lg mb-2">
            15 August 2026
          </div>
          <div className="text-[var(--color-saffron)] font-bold tracking-widest uppercase text-lg md:text-2xl">
            80th Independence Day
          </div>
        </motion.div>

      </div>
    </section>
  );
}
