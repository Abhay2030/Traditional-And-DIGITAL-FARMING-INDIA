import { Howl, Howler } from 'howler';

// Define the music states
export type MusicState = string;

// Define the available sound effects
export type SFXType = 
  | 'ui_click'
  | 'ui_hover'
  | 'drone_flight'
  | 'sensor_pulse'
  | 'water_flow'
  | 'data_processing'
  | 'tractor_engine';

class AudioManager {
  private static instance: AudioManager;
  
  private isMuted: boolean = false;
  // private currentMusicState: MusicState = 'SILENT'; // Removed unused state
  private masterVolume: number = 0.5;
  private musicVolume: number = 0.6;
  private sfxVolume: number = 0.8;
  private crossfadeDuration: number = 2500; // ms

  // Store Howl instances
  private musicTracks: Map<MusicState, Howl> = new Map();
  private sfxTracks: Map<SFXType, Howl> = new Map();

  private constructor() {
    // Initialize Howler global settings
    Howler.volume(this.masterVolume);
    
    // In a real application, you would load the actual MP3/WebM files here.
    // For now, we will create silent/placeholder Howl instances so the application doesn't crash,
    // and the developer can replace the src paths later.
    this.initMusicTracks();
    this.initSFXTracks();
  }

  public static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  private initMusicTracks() {
    const trackConfig = {
      loop: true,
      volume: 0,
      preload: true, 
    };

    // The single background track
    this.musicTracks.set('PLAYING', new Howl({ src: ['/audio/background_music.mp3'], ...trackConfig }));
  }

  private initSFXTracks() {
    const sfxConfig = {
      volume: this.sfxVolume,
      preload: true,
    };

    this.sfxTracks.set('ui_click', new Howl({ src: ['/audio/sfx_ui_click.wav'], ...sfxConfig }));
    this.sfxTracks.set('ui_hover', new Howl({ src: ['/audio/sfx_ui_hover.wav'], ...sfxConfig }));
    this.sfxTracks.set('drone_flight', new Howl({ src: ['/audio/sfx_drone.wav'], ...sfxConfig }));
    this.sfxTracks.set('sensor_pulse', new Howl({ src: ['/audio/sfx_sensor.wav'], ...sfxConfig }));
    this.sfxTracks.set('water_flow', new Howl({ src: ['/audio/sfx_water.wav'], ...sfxConfig }));
    this.sfxTracks.set('data_processing', new Howl({ src: ['/audio/sfx_data.wav'], ...sfxConfig }));
    this.sfxTracks.set('tractor_engine', new Howl({ src: ['/audio/sfx_tractor.wav'], ...sfxConfig }));
  }

  // --- CONTROLS ---

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    Howler.mute(this.isMuted);
    return this.isMuted;
  }

  public setMute(mute: boolean) {
    this.isMuted = mute;
    Howler.mute(mute);
  }

  public getMuteStatus(): boolean {
    return this.isMuted;
  }

  // --- MUSIC STATE MACHINE ---

  public setMusicState(_newState: MusicState) {
    // With the single background track, we just ensure PLAYING is active
    const bgTrack = this.musicTracks.get('PLAYING');
    
    if (bgTrack && !bgTrack.playing()) {
      console.log(`[Audio] Starting background music`);
      bgTrack.play();
      bgTrack.fade(0, this.musicVolume, this.crossfadeDuration);
    }
  }

  // --- SFX SYSTEM ---

  public playSFX(type: SFXType, spatialOptions?: { pan?: number }) {
    // If the system is globally muted, or the user is likely scrolling fast, we can optionally cull SFX.
    if (this.isMuted) return;

    const sfx = this.sfxTracks.get(type);
    if (sfx) {
      // Spatial Audio Support (Pan -1.0 to 1.0)
      if (spatialOptions && spatialOptions.pan !== undefined) {
        sfx.stereo(spatialOptions.pan);
      } else {
        sfx.stereo(0); // Center by default
      }
      sfx.play();
    }
  }

  // --- DYNAMIC MIXING ---

  // Since we only use one track now, slider audio mixing is disabled
  public mixSliderAudio(_percentage: number) {
    // Intentionally left blank as we just want continuous background music
  }
}

export const audioManager = AudioManager.getInstance();
