import { AccessibilityProvider } from './contexts/AccessibilityContext';
import { AudioProvider } from './contexts/AudioContext';
import { AccessibilityPanel } from './components/accessibility/AccessibilityPanel';
import { AudioControls } from './components/ui/AudioControls';

import { Footer } from './components/narrative/Footer';
import { PatrioticParticles } from './components/effects/PatrioticParticles';
import { TricolorBorders } from './components/effects/TricolorBorders';
import { IntroScreen } from './components/effects/IntroScreen';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Exhibition } from './pages/Exhibition';
import { TeamPage } from './pages/TeamPage';
import { useKioskMode } from './hooks/useKioskMode';
import { motion, AnimatePresence } from 'motion/react';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const { isKioskMode } = useKioskMode(45, 0.4); // 45 seconds idle, slow scroll speed

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [showIntro]);

  // Handle global background music auto-play
  useEffect(() => {
    const startAudio = () => {
      // Use the audio manager instance imported here or available globally
      import('./lib/audioManager').then(({ audioManager }) => {
        audioManager.setMusicState('PLAYING');
      });
      // Remove listeners once triggered
      ['click', 'touchstart', 'keydown', 'scroll'].forEach(event => {
        document.removeEventListener(event, startAudio);
      });
    };

    // Attempt immediately (might work if user already interacted with domain before)
    startAudio();

    // Attach as fallback for strict browser autoplay policies
    ['click', 'touchstart', 'keydown', 'scroll'].forEach(event => {
      document.addEventListener(event, startAudio, { once: true, passive: true });
    });

    return () => {
      ['click', 'touchstart', 'keydown', 'scroll'].forEach(event => {
        document.removeEventListener(event, startAudio);
      });
    };
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };
  
  return (
    <AccessibilityProvider>
      <AudioProvider>
        <BrowserRouter>
          {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
          
          {/* Skip link for accessibility */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          {/* Global UI Overlays */}
          <AnimatePresence>
            {isKioskMode && !showIntro && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
              >
                <div className="bg-black/60 backdrop-blur-md border border-[var(--color-saffron)]/30 rounded-full px-6 py-3 flex items-center gap-3 shadow-[0_0_30px_rgba(255,153,51,0.2)]">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-saffron)] animate-pulse" />
                  <span className="text-white/90 text-sm font-bold tracking-[0.2em] uppercase">Exhibition Auto-Play</span>
                  <div className="w-2 h-2 rounded-full bg-[var(--color-india-green)] animate-pulse" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AudioControls />

          <Routes>
            <Route path="/" element={
              <>
                <PatrioticParticles />
                <TricolorBorders />
                <main id="main-content">
                  <Exhibition />
                </main>
                <Footer />
                <AccessibilityPanel />
              </>
            } />
            <Route path="/team" element={
              <>
                <TeamPage />
                <AccessibilityPanel />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </AudioProvider>
    </AccessibilityProvider>
  );
}

export default App;
