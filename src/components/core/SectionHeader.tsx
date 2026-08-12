import { ScrollReveal } from '../ui/ScrollReveal';

interface SectionHeaderProps {
  badge?: string;
  title: string;

  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({ badge, title, subtitle, centered = true, light = false, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-16 md:mb-20 ${centered ? 'text-center' : ''} ${className}`}>
      {badge && (
        <ScrollReveal delay={0}>
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-6 ${
            light ? 'bg-white/10 text-white/80' : 'bg-[var(--color-agriculture)]/10 text-[var(--color-agriculture)]'
          }`}>
            {badge}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight ${
          light ? 'text-white' : 'text-[var(--color-charcoal)]'
        }`} style={{ fontFamily: 'var(--font-display)' }}>
          {title}
        </h2>
      </ScrollReveal>

      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className={`mt-5 text-lg md:text-xl max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-white/70' : 'text-[var(--color-slate)]'
          }`}>
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
