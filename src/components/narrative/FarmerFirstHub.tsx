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
    <section id="farmer-first" className="relative min-h-[100dvh] py-24 bg-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,188,212,0.03)_0%,rgba(255,255,255,1)_70%)] pointer-events-none" />
      
      {/* Central Orbit Visual */}
      <ScrollReveal>
        <div className="relative flex justify-center items-center py-12 mb-16 perspective-1000">
          <div className="relative" style={{ width: radius * 2 + 120, height: radius * 2 + 120 }}>
            
            {/* 3D Gyroscope Rings (Background) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="absolute rounded-full border border-[var(--color-saffron)]/20 shadow-[0_0_30px_rgba(255,153,51,0.1)]"
                style={{ width: radius * 2.2, height: radius * 2.2 }}
                animate={reduced ? {} : { rotateX: 60, rotateZ: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute rounded-full border border-[var(--color-india-green)]/20 shadow-[0_0_30px_rgba(19,136,8,0.1)]"
                style={{ width: radius * 2.4, height: radius * 2.4 }}
                animate={reduced ? {} : { rotateX: 70, rotateY: 20, rotateZ: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute rounded-full border border-blue-400/20"
                style={{ width: radius * 1.8, height: radius * 1.8 }}
                animate={reduced ? {} : { rotateX: 50, rotateY: -20, rotateZ: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Pulsating energy aura */}
              <motion.div 
                className="absolute w-48 h-48 bg-gradient-to-r from-[var(--color-saffron)]/10 to-[var(--color-india-green)]/10 rounded-full blur-3xl"
                animate={reduced ? {} : { scale: [1, 1.5, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Orbiting Icons */}
            <motion.div 
              className="absolute inset-0 z-20"
              animate={reduced ? {} : { rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            >
              {connections.map((conn) => {
                const cx = radius + 60;
                const cy = radius + 60;
                const rad = (conn.angle * Math.PI) / 180;
                const x = cx + Math.cos(rad) * radius - 35; // 35 is half of 70px width
                const y = cy + Math.sin(rad) * radius - 35;
                
                return (
                  <div
                    key={conn.label}
                    className="absolute flex flex-col items-center"
                    style={{ left: x, top: y, width: 70, height: 70 }}
                  >
                    {/* Counter-rotate the icons so they stay upright */}
                    <motion.div
                      className="w-full h-full"
                      animate={reduced ? {} : { rotate: -360 }}
                      transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                    >
                      <motion.div 
                        className="w-full h-full rounded-2xl bg-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.1),inset_0_2px_5px_rgba(255,255,255,1)] backdrop-blur-xl flex flex-col items-center justify-center border border-white/50 cursor-pointer group"
                        whileHover={{ scale: 1.2, y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl" style={{ background: `radial-gradient(circle, ${conn.color} 0%, transparent 80%)` }} />
                        <conn.icon size={26} style={{ color: conn.color }} className="relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" />
                        <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[11px] font-black tracking-wider uppercase text-gray-700 bg-white/90 px-2 py-0.5 rounded shadow-sm">{conn.label}</span>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Center — Realistic Farmer (3D Floating Orb) */}
            <div
              className="absolute z-30 flex flex-col items-center justify-center"
              style={{ left: radius + 60 - 100, top: radius + 60 - 100, width: 200, height: 200 }}
            >
              <motion.div 
                className="relative w-48 h-48 rounded-full p-2 bg-gradient-to-br from-white via-gray-100 to-gray-300 shadow-[0_30px_60px_rgba(0,0,0,0.2),inset_0_4px_15px_rgba(255,255,255,1)]"
                animate={reduced ? {} : { y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div 
                  className="w-full h-full rounded-full shadow-[inset_0_10px_20px_rgba(0,0,0,0.3)] bg-cover bg-center overflow-hidden border-4 border-white relative group"
                  style={{ backgroundImage: 'url(/images/indian_farmer_portrait.png)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  {/* Sweep reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" />
                </div>
                
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--color-saffron)] to-[var(--color-india-green)] text-white px-8 py-2.5 rounded-full font-black uppercase tracking-[0.25em] text-sm shadow-[0_15px_30px_rgba(0,0,0,0.2)] border-2 border-white whitespace-nowrap overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  <span className="relative z-10 drop-shadow-md">The Farmer</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Typography Statement */}
      <div className="text-center px-4 relative z-40 mt-12 w-full max-w-5xl mx-auto">
        <ScrollReveal delay={0.2}>
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 uppercase tracking-tight relative z-10" style={{ fontFamily: 'var(--font-display)' }}>
              Technology is the tool.
            </h2>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <div className="relative mt-2 md:mt-6 group cursor-default">
            <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-black uppercase tracking-tighter leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-india-green)] via-[#2ecc71] to-[#145A32] drop-shadow-[0_15px_25px_rgba(19,136,8,0.2)] group-hover:drop-shadow-[0_20px_35px_rgba(19,136,8,0.4)] transition-all duration-700">
                The farmer is the decision maker.
              </span>
            </h2>
          </div>
        </ScrollReveal>
      </div>
      
    </section>
  );
}
