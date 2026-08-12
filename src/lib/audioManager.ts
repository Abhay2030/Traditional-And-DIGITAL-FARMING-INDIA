import { Howl, Howler } from 'howler';

// Define the music states
export type MusicState = 
  | 'SILENT'
  | 'TRADITION'
  | 'TRANSFORMATION'
  | 'DIGITAL'
  | 'SMART_FARM'
  | 'FUTURE'
  | 'INDEPENDENCE_DAY';

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
  private currentMusicState: MusicState = 'SILENT';
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
      preload: true, // Only preload the ones we need immediately in production, but true for local
    };

    // Replace these src paths with actual audio files in the public directory
    this.musicTracks.set('TRADITION', new Howl({ src: ['/audio/music_tradition.mp3'], ...trackConfig }));
    this.musicTracks.set('TRANSFORMATION', new Howl({ src: ['/audio/music_transformation.mp3'], ...trackConfig }));
    this.musicTracks.set('DIGITAL', new Howl({ src: ['/audio/music_digital.mp3'], ...trackConfig }));
    this.musicTracks.set('SMART_FARM', new Howl({ src: ['/audio/music_smart_farm.mp3'], ...trackConfig }));
    this.musicTracks.set('FUTURE', new Howl({ src: ['/audio/music_future.mp3'], ...trackConfig }));
    this.musicTracks.set('INDEPENDENCE_DAY', new Howl({ src: ['/audio/music_independence.mp3'], ...trackConfig }));
  }

  private initSFXTracks() {
    const sfxConfig = {
      volume: this.sfxVolume,
      preload: true,
    };

    this.sfxTracks.set('ui_click', new Howl({ src: ['/audio/sfx_ui_click.mp3'], ...sfxConfig }));
    this.sfxTracks.set('ui_hover', new Howl({ src: ['/audio/sfx_ui_hover.mp3'], ...sfxConfig }));
    this.sfxTracks.set('drone_flight', new Howl({ src: ['/audio/sfx_drone.mp3'], ...sfxConfig }));
    this.sfxTracks.set('sensor_pulse', new Howl({ src: ['/audio/sfx_sensor.mp3'], ...sfxConfig }));
    this.sfxTracks.set('water_flow', new Howl({ src: ['/audio/sfx_water.mp3'], ...sfxConfig }));
    this.sfxTracks.set('data_processing', new Howl({ src: ['/audio/sfx_data.mp3'], ...sfxConfig }));
    this.sfxTracks.set('tractor_engine', new Howl({ src: ['/audio/sfx_tractor.mp3'], ...sfxConfig }));
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

  public setMusicState(newState: MusicState) {
    if (this.currentMusicState === newState) return;
    
    console.log(`[Audio] Transitioning music: ${this.currentMusicState} -> ${newState}`);

    const oldTrack = this.musicTracks.get(this.currentMusicState);
    const newTrack = this.musicTracks.get(newState);

    // Fade out old track
    if (oldTrack && oldTrack.playing()) {
      oldTrack.fade(this.musicVolume, 0, this.crossfadeDuration);
      setTimeout(() => {
        oldTrack.pause();
      }, this.crossfadeDuration);
    }

    // Fade in new track
    if (newTrack) {
      if (!newTrack.playing()) {
        newTrack.play();
      }
      newTrack.fade(0, this.musicVolume, this.crossfadeDuration);
    }

    this.currentMusicState = newState;
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

  // For the Before/After slider specific mixing
  public mixSliderAudio(percentage: number) {
    // percentage: 0 = Tradition, 1 = Digital
    const traditionTrack = this.musicTracks.get('TRADITION');
    const digitalTrack = this.musicTracks.get('DIGITAL');

    if (!traditionTrack || !digitalTrack) return;

    // We don't change the global state machine here, we just override volumes dynamically
    if (!traditionTrack.playing()) traditionTrack.play();
    if (!digitalTrack.playing()) digitalTrack.play();

    // Custom volume mapping to create the crossfade manually
    traditionTrack.volume((1 - percentage) * this.musicVolume);
    digitalTrack.volume(percentage * this.musicVolume);
  }
}

export const audioManager = AudioManager.getInstance();
