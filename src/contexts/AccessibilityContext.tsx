import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';

interface AccessibilityState {
  textSize: 'normal' | 'large' | 'extra-large';
  highContrast: boolean;
  reducedMotion: boolean;
  simpleMode: boolean;
  setTextSize: (size: 'normal' | 'large' | 'extra-large') => void;
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
  toggleSimpleMode: () => void;
}

const AccessibilityContext = createContext<AccessibilityState | null>(null);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [textSize, setTextSizeState] = useState<'normal' | 'large' | 'extra-large'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const [simpleMode, setSimpleMode] = useState(false);

  const setTextSize = useCallback((size: 'normal' | 'large' | 'extra-large') => {
    setTextSizeState(size);
    document.documentElement.dataset.textSize = size;
  }, []);

  const toggleHighContrast = useCallback(() => {
    setHighContrast(prev => {
      const next = !prev;
      document.documentElement.dataset.contrast = next ? 'high' : 'normal';
      return next;
    });
  }, []);

  const toggleReducedMotion = useCallback(() => {
    setReducedMotion(prev => {
      const next = !prev;
      document.documentElement.dataset.reducedMotion = String(next);
      return next;
    });
  }, []);

  const toggleSimpleMode = useCallback(() => {
    setSimpleMode(prev => !prev);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setReducedMotion(true);
      document.documentElement.dataset.reducedMotion = 'true';
    }
  }, []);

  return (
    <AccessibilityContext.Provider value={{ 
      textSize, highContrast, reducedMotion, simpleMode,
      setTextSize, toggleHighContrast, toggleReducedMotion, toggleSimpleMode
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error('useAccessibility must be used within AccessibilityProvider');
  return ctx;
}
