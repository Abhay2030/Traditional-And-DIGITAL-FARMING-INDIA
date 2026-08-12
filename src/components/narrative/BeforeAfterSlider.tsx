import { useState, useRef, useCallback, useEffect } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { audioManager } from '../../lib/audioManager';

export function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    // dynamically mix the Tradition and Digital audio tracks based on slider position
    audioManager.mixSliderAudio(sliderPos / 100);
  }, [sliderPos]);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
  const handleTouchMove = (e: React.TouchEvent) => { handleMove(e.touches[0].clientX); };

  return (
    <section id="before-after" className="relative min-h-[100dvh] w-full overflow-hidden bg-black flex flex-col justify-center select-none">
      
      {/* Title - Center Overlay (Always visible) */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 z-30 text-center pointer-events-none">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tighter" style={{ fontFamily: 'var(--font-display)', textShadow: '0 4px 40px rgba(0,0,0,0.8)' }}>
            Same Farm.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-saffron)] to-[var(--color-india-green)]">
              New Tools.
            </span>
          </h2>
        </ScrollReveal>
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-full cursor-col-resize touch-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* RIGHT SIDE: DIGITAL FARMING (Background Layer) */}
        <div className="absolute inset-0 bg-[#061121] flex flex-col justify-center px-10 md:px-32">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 70% 50%, rgba(0, 188, 212, 0.15) 0%, transparent 50%)'
          }} />
          
          <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-end">
            <div className="text-right">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-12 uppercase tracking-widest" style={{ fontFamily: 'var(--font-display)' }}>
                Digital Farming
              </h3>
              
              <div className="flex flex-col gap-10">
                <ComparisonItem right icon="🚜" label="Machine Power" sub="Tractor" />
                <ComparisonItem right icon="🛰️" label="More Information" sub="Drone + Sensors" />
                <ComparisonItem right icon="📱" label="Data-Informed" sub="Smart Irrigation" />
                <ComparisonItem right icon="💻" label="Digital Records" sub="Dashboard" />
              </div>
            </div>
          </div>
        </div>

        {/* LEFT SIDE: TRADITIONAL FARMING (Foreground Clipped Layer) */}
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-32" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/traditional_farming_bg.png)', filter: 'brightness(0.5)' }} />
          
          <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-start">
            <div className="text-left">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-12 uppercase tracking-widest" style={{ fontFamily: 'var(--font-display)' }}>
                Traditional Farming
              </h3>
              
              <div className="flex flex-col gap-10">
                <ComparisonItem left icon="🐂" label="Manual Power" sub="Bullock" />
                <ComparisonItem left icon="👨‍🌾" label="Manual Observation" sub="Farmer walks field" />
                <ComparisonItem left icon="🌊" label="Manual Management" sub="Water channel" />
                <ComparisonItem left icon="📝" label="Manual Records" sub="Memory / Paper" />
              </div>
            </div>
          </div>
        </div>

        {/* The Drag Handle */}
        <div className="absolute top-0 bottom-0 z-20" style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}>
          <div className="w-1 h-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 12L3 12M16 12L21 12M8 12L11 9M8 12L11 15M16 12L13 9M16 12L13 15" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonItem({ right, icon, label, sub }: { left?: boolean, right?: boolean, icon: string, label: string, sub: string }) {
  return (
    <div className={`flex items-center gap-6 ${right ? 'flex-row-reverse' : ''}`}>
      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-3xl shadow-lg">
        {icon}
      </div>
      <div>
        <div className="text-white/60 text-sm font-medium tracking-widest uppercase mb-1">{sub}</div>
        <div className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide">{label}</div>
      </div>
    </div>
  );
}
