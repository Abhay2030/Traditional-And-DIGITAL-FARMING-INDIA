import { Settings, Type, Eye, Zap } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAccessibility } from '../../contexts/AccessibilityContext';

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { textSize, setTextSize, highContrast, toggleHighContrast, reducedMotion, toggleReducedMotion, simpleMode, toggleSimpleMode } = useAccessibility();

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[var(--color-forest)] text-white shadow-lg hover:scale-105 active:scale-95 transition-transform flex items-center justify-center"
        aria-label="Accessibility settings"
        title="Accessibility settings"
      >
        <Settings size={20} />
      </button>

      {/* Panel overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[61] w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
              role="dialog"
              aria-label="Accessibility settings"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-[var(--color-charcoal)]" style={{ fontFamily: 'var(--font-display)' }}>
                    Accessibility
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full bg-[var(--color-mist)] flex items-center justify-center hover:bg-[var(--color-mist-dark)] transition-colors"
                    aria-label="Close accessibility panel"
                  >
                    ✕
                  </button>
                </div>

                {/* Text Size */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Type size={18} className="text-[var(--color-agriculture)]" />
                    <h3 className="font-semibold text-[var(--color-charcoal)]">Text Size</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {(['normal', 'large', 'extra-large'] as const).map((size) => (
                      <button
                        key={size}
                        onClick={() => setTextSize(size)}
                        className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                          textSize === size
                            ? 'bg-[var(--color-agriculture)] text-white shadow-md'
                            : 'bg-[var(--color-mist)] text-[var(--color-slate)] hover:bg-[var(--color-mist-dark)]'
                        }`}
                      >
                        {size === 'normal' ? 'A' : size === 'large' ? 'A+' : 'A++'}
                        <div className="text-[10px] mt-0.5 opacity-70 capitalize">{size.replace('-', ' ')}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* High Contrast */}
                <div className="mb-8">
                  <button
                    onClick={toggleHighContrast}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-[var(--color-mist)] hover:bg-[var(--color-mist-dark)] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Eye size={18} className="text-[var(--color-agriculture)]" />
                      <div className="text-left">
                        <div className="font-semibold text-[var(--color-charcoal)]">High Contrast</div>
                        <div className="text-xs text-[var(--color-slate)]">Increase text and border visibility</div>
                      </div>
                    </div>
                    <div className={`w-11 h-6 rounded-full transition-colors relative ${highContrast ? 'bg-[var(--color-agriculture)]' : 'bg-gray-300'}`}>
                      <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${highContrast ? 'translate-x-5' : 'translate-x-0.5'}`} />
                    </div>
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="mb-8">
                  <button
                    onClick={toggleReducedMotion}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-[var(--color-mist)] hover:bg-[var(--color-mist-dark)] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Zap size={18} className="text-[var(--color-agriculture)]" />
                      <div className="text-left">
                        <div className="font-semibold text-[var(--color-charcoal)]">Reduce Motion</div>
                        <div className="text-xs text-[var(--color-slate)]">Minimize animations and movement</div>
                      </div>
                    </div>
                    <div className={`w-11 h-6 rounded-full transition-colors relative ${reducedMotion ? 'bg-[var(--color-agriculture)]' : 'bg-gray-300'}`}>
                      <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${reducedMotion ? 'translate-x-5' : 'translate-x-0.5'}`} />
                    </div>
                  </button>
                </div>

                {/* Simple Mode */}
                <div className="mb-8">
                  <button
                    onClick={toggleSimpleMode}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-[var(--color-mist)] hover:bg-[var(--color-mist-dark)] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Eye size={18} className="text-[var(--color-leaf)]" />
                      <div className="text-left">
                        <div className="font-semibold text-[var(--color-charcoal)]">Simple Mode</div>
                        <div className="text-xs text-[var(--color-slate)]">Larger visuals, shorter text</div>
                      </div>
                    </div>
                    <div className={`w-11 h-6 rounded-full transition-colors relative ${simpleMode ? 'bg-[var(--color-leaf)]' : 'bg-gray-300'}`}>
                      <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${simpleMode ? 'translate-x-5' : 'translate-x-0.5'}`} />
                    </div>
                  </button>
                </div>

                {/* Credit */}
                <div className="pt-6 border-t border-[var(--color-mist-dark)]">
                  <p className="text-xs text-[var(--color-slate-light)] text-center">
                    Designed for everyone. Built with care.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
