
import { ScrollReveal } from '../ui/ScrollReveal';
import { Calendar, MapPin, Flag, Award } from 'lucide-react';

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function CollegeIdentity() {
  return (
    <section id="college" className="section-padding bg-[#050B14] relative overflow-hidden text-white">
      {/* Cinematic Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[var(--color-saffron)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[var(--color-leaf)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />
      


      <div className="container-narrative relative z-10">
        
        {/* EVENT TICKET */}
        <div className="max-w-4xl mx-auto mb-32">
          <ScrollReveal>
             <div className="relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-3xl shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-[#0a1628]/90" />
               <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                 {/* Left: Event Title */}
                 <div className="flex-1 text-center md:text-left">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                     <Flag size={14} className="text-[var(--color-saffron)]" />
                     <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">Independence Day 2026</span>
                   </div>
                   <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60" style={{ fontFamily: 'var(--font-display)' }}>
                     Digital Farming Exhibition
                   </h2>
                   <p className="text-white/40 text-sm tracking-widest uppercase">Presented by the 2nd Year Computer Engineering Dept.</p>
                 </div>

                 {/* Right: Details */}
                 <div className="flex-1 space-y-6 md:border-l md:border-white/10 md:pl-12 w-full">
                    <EventDetail icon={Calendar} label="Date" value="15 August 2026" color="text-[var(--color-saffron)]" />
                    <EventDetail icon={MapPin} label="Location" value="Sir Visvesvaraya Institute of Technology, Nashik" color="text-[var(--color-leaf)]" />
                    <EventDetail icon={Award} label="Program" value="Interactive Educational Exhibition" color="text-[var(--color-ashoka-blue)]" />
                 </div>
               </div>
             </div>
          </ScrollReveal>
        </div>



        {/* TEAM LINK */}
        <div className="max-w-4xl mx-auto text-center px-4 mt-20 mb-32">
          <ScrollReveal>
            <div className="p-[1px] rounded-3xl bg-gradient-to-b from-white/20 to-white/5 inline-block">
              <div className="px-12 py-10 rounded-[1.4rem] bg-[#050B14] flex flex-col items-center">
                <h3 className="text-sm font-bold tracking-[0.3em] text-[var(--color-saffron)] uppercase mb-4">Old Farming & Modern Farming</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-display)' }}>Meet the Minds Behind the Exhibition</h2>
                <Link 
                  to="/team" 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#050B14] font-bold text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300 group"
                >
                  View Our Team
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function EventDetail({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
        <Icon size={20} className={color} />
      </div>
      <div>
        <div className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">{label}</div>
        <div className="text-sm md:text-base font-semibold text-white/90">{value}</div>
      </div>
    </div>
  );
}
