const fs = require('fs');
const path = require('path');

const audioDir = path.join(__dirname, 'public', 'audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

function writeWav(filename, freq, durationSec) {
  const sampleRate = 8000;
  const numSamples = sampleRate * durationSec;
  const buffer = Buffer.alloc(44 + numSamples);
  
  // RIFF header
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + numSamples, 4);
  buffer.write('WAVE', 8);
  
  // fmt subchunk
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16); // Subchunk1Size
  buffer.writeUInt16LE(1, 20); // AudioFormat (PCM)
  buffer.writeUInt16LE(1, 22); // NumChannels
  buffer.writeUInt32LE(sampleRate, 24); // SampleRate
  buffer.writeUInt32LE(sampleRate, 28); // ByteRate
  buffer.writeUInt16LE(1, 32); // BlockAlign
  buffer.writeUInt16LE(8, 34); // BitsPerSample
  
  // data subchunk
  buffer.write('data', 36);
  buffer.writeUInt32LE(numSamples, 40);
  
  // Write sine wave data
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    // 128 is center for 8-bit (0-255)
    const val = Math.floor(128 + 127 * Math.sin(2 * Math.PI * freq * t));
    buffer.writeUInt8(val, 44 + i);
  }
  
  fs.writeFileSync(path.join(audioDir, filename), buffer);
}

// Generate music (low drone frequencies, longer loops)
writeWav('music_tradition.wav', 150, 10);
writeWav('music_transformation.wav', 200, 10);
writeWav('music_digital.wav', 250, 10);
writeWav('music_smart_farm.wav', 300, 10);
writeWav('music_future.wav', 350, 10);
writeWav('music_independence.wav', 400, 10);

// Generate SFX (higher frequency, short duration)
writeWav('sfx_ui_click.wav', 1200, 0.1);
writeWav('sfx_ui_hover.wav', 800, 0.05);
writeWav('sfx_drone.wav', 100, 2);
writeWav('sfx_sensor.wav', 2000, 0.2);
writeWav('sfx_water.wav', 300, 1);
writeWav('sfx_data.wav', 1500, 0.3);
writeWav('sfx_tractor.wav', 80, 2);

console.log('Successfully generated placeholder audio files in public/audio');
