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
import { AcesIdentity } from '../components/narrative/AcesIdentity';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Users } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function Exhibition() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* Floating ACES Logo (Top Left) */}
      <motion.div
        className="fixed top-6 left-6 z-50 md:top-8 md:left-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.0, duration: 0.8, ease: "easeOut" }}
      >
        <a 
          href="#aces-identity"
          className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#050B14]/80 backdrop-blur-xl border border-white/10 hover:border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 overflow-hidden"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('aces-identity')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {/* Light sweep */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full" />
          
          <img 
            src="/images/aces-logo.png" 
            alt="ACES Logo" 
            className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </a>
      </motion.div>

      {/* Floating Our Team Button */}
      <motion.div 
        className="fixed top-6 right-6 z-50 md:top-8 md:right-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
      >
        <Link to="/team">
          <motion.button
            className="group relative flex items-center gap-4 px-8 py-4 rounded-full bg-black/60 backdrop-blur-xl border-2 border-[var(--color-saffron)]/50 hover:border-[var(--color-saffron)] shadow-[0_0_30px_rgba(255,153,51,0.3)] hover:shadow-[0_0_50px_rgba(255,153,51,0.6)] transition-all duration-500 overflow-hidden"
            whileHover={reduced ? {} : { scale: 1.05, y: -2 }}
            whileTap={reduced ? {} : { scale: 0.95 }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-saffron)]/20 via-transparent to-[var(--color-india-green)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Glowing orb behind icon */}
            <div className="absolute left-8 w-10 h-10 bg-[var(--color-saffron)]/30 rounded-full blur-xl group-hover:bg-[var(--color-saffron)]/60 transition-colors duration-500" />
            
            <Users size={28} className="text-[var(--color-saffron)] relative z-10 group-hover:scale-110 transition-transform duration-500" />
            <span className="text-base md:text-lg font-bold tracking-[0.25em] uppercase text-white drop-shadow-lg relative z-10">
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
      <AcesIdentity />
    </>
  );
}
