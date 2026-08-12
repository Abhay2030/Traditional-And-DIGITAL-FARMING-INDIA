import React, { createContext, useContext, useState, useEffect } from 'react';
import { audioManager } from '../lib/audioManager';
import type { MusicState } from '../lib/audioManager';

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  setMusicState: (state: MusicState) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Start with audio muted by default to respect browser autoplay policies and user preference
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Initialize the manager state based on initial React state
    audioManager.setMute(isMuted);
  }, []);

  const toggleMute = () => {
    const newMuteState = audioManager.toggleMute();
    setIsMuted(newMuteState);
  };

  const setMusicState = (state: MusicState) => {
    audioManager.setMusicState(state);
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, setMusicState }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
