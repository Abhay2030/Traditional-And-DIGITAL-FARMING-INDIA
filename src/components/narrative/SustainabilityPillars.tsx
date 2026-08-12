import { SectionHeader } from '../core/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { motion } from 'motion/react';
import { Sprout, Droplets, Zap, Trees, Shield } from 'lucide-react';

const pillars = [
  { icon: Sprout, title: 'Soil Health', desc: 'Protecting and improving soil quality for future generations.', color: '#765334' },
  { icon: Droplets, title: 'Water Conservation', desc: 'Using water wisely — every drop that reaches the root matters.', color: '#2196F3' },
  { icon: Zap, title: 'Energy Efficiency', desc: 'Moving toward renewable energy in farm operations.', color: '#F57F17' },
  { icon: Trees, title: 'Biodiversity', desc: 'Maintaining healthy ecosystems alongside productive farming.', color: '#4CAF50' },
  { icon: Shield, title: 'Resilience', desc: 'Building farming systems that can adapt to changing conditions.', color: '#1A237E' },
];

export function SustainabilityPillars() {
  return (
    <section id="sustainability" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f0f7f0 0%, var(--color-cream) 100%)' }}>
      <div className="container-narrative">
        <SectionHeader
          badge="Responsibility"
          title="Smart Farming Must Also Be Responsible Farming"

          subtitle="Technology alone does not guarantee sustainability. Good decisions, appropriate practices, and local conditions matter."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.1}>
              <motion.div
                className="text-center p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all group"
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-colors"
                  style={{ background: `${pillar.color}10` }}
                  whileHover={{ background: `${pillar.color}20` }}
                >
                  <pillar.icon size={28} style={{ color: pillar.color }} />
                </motion.div>
                <h3 className="text-base font-bold text-[var(--color-charcoal)] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                  {pillar.title}
                </h3>

                <p className="text-xs text-[var(--color-slate)] leading-relaxed">{pillar.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
