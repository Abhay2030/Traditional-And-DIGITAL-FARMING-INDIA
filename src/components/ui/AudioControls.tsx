import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../contexts/AudioContext';
import { audioManager } from '../../lib/audioManager';

export function AudioControls() {
  const { isMuted, toggleMute } = useAudio();

  const handleToggle = () => {
    // Play a tiny UI sound when enabling audio (if it wasn't muted)
    // Actually, if they are unmuting, the system will instantly unmute, then play the sound.
    toggleMute();
    if (isMuted) {
      // It was muted, now it's unmuted. Play a soft activation pulse.
      audioManager.playSFX('ui_click');
    }
  };

  return (
    <motion.div
      className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[90]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <button
        onClick={handleToggle}
        className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
        aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {isMuted ? (
          <VolumeX size={18} className="text-white/50" />
        ) : (
          <div className="relative">
            <Volume2 size={18} className="text-[var(--color-saffron)]" />
            {/* Animated Equalizer bars simulating playing audio */}
            <div className="absolute -top-1 -right-2 flex gap-[2px] h-3 items-end">
               <motion.div className="w-[2px] bg-[var(--color-saffron)]" animate={{ height: [4, 10, 4] }} transition={{ duration: 0.8, repeat: Infinity }} />
               <motion.div className="w-[2px] bg-white" animate={{ height: [8, 4, 8] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
               <motion.div className="w-[2px] bg-[var(--color-india-green)]" animate={{ height: [5, 12, 5] }} transition={{ duration: 0.9, repeat: Infinity, delay: 0.4 }} />
            </div>
          </div>
        )}
        
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors relative z-10 w-[70px] text-left">
          {isMuted ? "Sound Off" : "Sound On"}
        </span>
      </button>
    </motion.div>
  );
}
