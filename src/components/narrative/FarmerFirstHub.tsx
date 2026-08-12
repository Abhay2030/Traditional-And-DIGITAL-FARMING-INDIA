import { ScrollReveal } from '../ui/ScrollReveal';
import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Plane, Wifi, Droplets, Brain, Tractor, CloudSun, Smartphone } from 'lucide-react';

const connections = [
  { icon: Plane, label: 'Drone', angle: 0, color: '#7C4DFF' },
  { icon: Wifi, label: 'Sensor', angle: 51, color: '#00BCD4' },
  { icon: CloudSun, label: 'Weather', angle: 102, color: '#0277BD' },
  { icon: Smartphone, label: 'Phone', angle: 154, color: '#455A64' },
  { icon: Tractor, label: 'Tractor', angle: 205, color: '#E65100' },
  { icon: Droplets, label: 'Water', angle: 257, color: '#2196F3' },
  { icon: Brain, label: 'AI', angle: 308, color: '#9C27B0' },
];

export function FarmerFirstHub() {
  const reduced = useReducedMotion();
  const radius = 180;

  return (
    <section id="farmer-first" className="relative min-h-[100dvh] py-20 bg-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* Central Orbit Visual */}
      <ScrollReveal>
        <div className="relative flex justify-center items-center py-8 mb-12">
          <div className="relative" style={{ width: radius * 2 + 120, height: radius * 2 + 120 }}>
            
            {/* Orbit paths */}
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
              <circle cx={radius + 60} cy={radius + 60} r={radius} fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="8 8" />
            </svg>

            {/* Orbiting Icons */}
            <motion.div 
              className="absolute inset-0"
              animate={reduced ? {} : { rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            >
              {connections.map((conn) => {
                const cx = radius + 60;
                const cy = radius + 60;
                const rad = (conn.angle * Math.PI) / 180;
                const x = cx + Math.cos(rad) * radius - 30; // 30 is half of 60px width
                const y = cy + Math.sin(rad) * radius - 30;
                
                return (
                  <div
                    key={conn.label}
                    className="absolute flex flex-col items-center"
                    style={{ left: x, top: y, width: 60 }}
                  >
                    {/* Counter-rotate the icons so they stay upright */}
                    <motion.div
                      animate={reduced ? {} : { rotate: -360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    >
                      <div className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center border-2" style={{ borderColor: conn.color }}>
                        <conn.icon size={24} style={{ color: conn.color }} />
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Center — Realistic Farmer */}
            <div
              className="absolute z-10 flex flex-col items-center justify-center"
              style={{ left: radius + 60 - 80, top: radius + 60 - 80, width: 160, height: 160 }}
            >
              <div 
                className="w-40 h-40 rounded-full shadow-2xl border-4 border-white bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/indian_farmer_portrait.png)' }}
              />
              <div className="absolute -bottom-4 bg-[var(--color-agriculture)] text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg">
                Farmer
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Typography Statement */}
      <div className="text-center px-4 relative z-10">
        <ScrollReveal delay={0.2}>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--color-charcoal)] uppercase tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Technology is the tool.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--color-leaf)] uppercase tracking-tight mt-2 md:mt-4" style={{ fontFamily: 'var(--font-display)' }}>
            The farmer is the decision maker.
          </h2>
        </ScrollReveal>
      </div>
      
    </section>
  );
}
