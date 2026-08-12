import { SectionHeader } from '../core/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { motion } from 'motion/react';
import { cropJourney } from '../../data/content';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function CropJourney() {
  const reduced = useReducedMotion();

  return (
    <section id="crop-journey" className="section-padding bg-[var(--color-cream)] relative overflow-hidden">
      <div className="container-narrative">
        <SectionHeader
          badge="The Cycle of Life"
          title="From Seed to Harvest"

          subtitle="Every crop goes through a journey. Technology can support the farmer at each stage."
        />

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-leaf)] via-[var(--color-agriculture)] to-[var(--color-soil)]" />

          {cropJourney.map((stage, i) => {
            const isLeft = i % 2 === 0;
            return (
              <ScrollReveal key={stage.stage} delay={i * 0.1} direction={isLeft ? 'left' : 'right'}>
                <div className={`relative flex items-start gap-6 mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg"
                      style={{ background: stage.color }}
                      whileHover={reduced ? {} : { scale: 1.15 }}
                    >
                      {stage.icon}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}>
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: stage.color }}>
                        Stage {i + 1}
                      </div>
                      <h3 className="text-lg font-bold text-[var(--color-charcoal)]" style={{ fontFamily: 'var(--font-display)' }}>
                        {stage.stage}
                      </h3>

                      <p className="text-sm text-[var(--color-slate)] mb-3">{stage.description}</p>

                      {/* Tech at this stage */}
                      <div className="pt-3 border-t border-gray-100">
                        <div className="text-[10px] font-semibold text-[var(--color-agriculture)] uppercase tracking-wider mb-1">Technology at this stage</div>
                        <div className="text-xs font-medium text-[var(--color-charcoal)]">{stage.technology}</div>
                        <div className="text-xs text-[var(--color-slate)] mt-0.5">{stage.techDescription}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
