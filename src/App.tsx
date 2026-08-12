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

function App() {
  const [showIntro, setShowIntro] = useState(true);

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
