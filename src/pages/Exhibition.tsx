import { HeroScene } from '../components/narrative/HeroScene';
import { TraditionalKnowledge } from '../components/narrative/TraditionalKnowledge';
import { BeforeAfterSlider } from '../components/narrative/BeforeAfterSlider';
import { FarmerFirstHub } from '../components/narrative/FarmerFirstHub';
import { ComparisonTable } from '../components/narrative/ComparisonTable';
import { TechnologyHub } from '../components/narrative/TechnologyHub';
import { CropJourney } from '../components/narrative/CropJourney';
import { SustainabilityPillars } from '../components/narrative/SustainabilityPillars';
import { IndependenceDayFinale } from '../components/narrative/IndependenceDayFinale';
import { VisionMission } from '../components/narrative/VisionMission';
import { CollegeIdentity } from '../components/narrative/CollegeIdentity';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Users } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function Exhibition() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* Floating Our Team Button */}
      <motion.div 
        className="fixed top-6 right-6 z-50 md:top-8 md:right-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
      >
        <Link to="/team">
          <motion.button
            className="group relative flex items-center gap-3 px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-[var(--color-saffron)]/30 hover:border-[var(--color-saffron)]/70 hover:bg-[#050B14]/80 shadow-[0_0_20px_rgba(255,153,51,0.15)] hover:shadow-[0_0_30px_rgba(255,153,51,0.3)] transition-all duration-300 overflow-hidden"
            whileHover={reduced ? {} : { scale: 1.05 }}
            whileTap={reduced ? {} : { scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-saffron)]/10 via-transparent to-[var(--color-india-green)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Users size={18} className="text-[var(--color-saffron)]" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-white drop-shadow-md relative z-10">
              Our Team
            </span>
          </motion.button>
        </Link>
      </motion.div>
      {/* ═══════════════════════════════════════════
          ACT I — THE LAND
          The journey begins with India's farmland.
       ═══════════════════════════════════════════ */}
      <HeroScene />

      {/* ═══════════════════════════════════════════
          ACT II — THE ROOTS
          What generations already knew.
       ═══════════════════════════════════════════ */}
      <TraditionalKnowledge />
      <BeforeAfterSlider />
      <ComparisonTable />
      <FarmerFirstHub />

      {/* ═══════════════════════════════════════════
          ACT III — THE TRANSFORMATION
          Technology enters the field.
       ═══════════════════════════════════════════ */}
      <TechnologyHub />

      {/* ═══════════════════════════════════════════
          ACT IV — THE SMART FARM
          Interactive experiences.
       ═══════════════════════════════════════════ */}
      <CropJourney />

      {/* ═══════════════════════════════════════════
          ACT V — THE FUTURE
          Responsibility, limits, and the path ahead.
       ═══════════════════════════════════════════ */}
      <SustainabilityPillars />

      {/* ═══════════════════════════════════════════
          ACT VI — THE CELEBRATION
          Independence Day & College Identity.
       ═══════════════════════════════════════════ */}
      <IndependenceDayFinale />
      <VisionMission />
      <CollegeIdentity />
    </>
  );
}
