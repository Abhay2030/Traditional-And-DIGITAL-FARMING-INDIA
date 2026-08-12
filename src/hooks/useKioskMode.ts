import { useState, useEffect, useRef } from 'react';

export function useKioskMode(idleTimeoutSeconds = 45, scrollSpeed = 0.5) {
  const [isKioskMode, setIsKioskMode] = useState(false);
  const idleTimerRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const resetIdleTimer = () => {
    setIsKioskMode(false);
    if (idleTimerRef.current) {
      window.clearTimeout(idleTimerRef.current);
    }

    idleTimerRef.current = window.setTimeout(() => {
      setIsKioskMode(true);
    }, idleTimeoutSeconds * 1000);
  };

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'touchstart', 'wheel', 'click'];
    
    // Initial start
    resetIdleTimer();

    // Add listeners
    events.forEach(event => {
      window.addEventListener(event, resetIdleTimer, { passive: true });
    });

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, resetIdleTimer);
      });
      if (idleTimerRef.current) window.clearTimeout(idleTimerRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [idleTimeoutSeconds]);

  // Auto-scroll logic
  useEffect(() => {
    if (!isKioskMode) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    let lastTime = performance.now();
    
    const autoScroll = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      // Ensure stable framerate scaling (60fps baseline ~16.6ms)
      const timeScale = deltaTime / 16.66;
      
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      if (window.scrollY < maxScroll - 10) {
        window.scrollBy({ top: scrollSpeed * timeScale, left: 0 });
      } else {
        // We reached the bottom, smoothly snap to top to loop the exhibition
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Pause for 5 seconds at the top before resuming
        setTimeout(() => {
            lastTime = performance.now();
        }, 5000);
      }

      animationFrameRef.current = requestAnimationFrame(autoScroll);
    };

    animationFrameRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isKioskMode, scrollSpeed]);

  return { isKioskMode };
}
