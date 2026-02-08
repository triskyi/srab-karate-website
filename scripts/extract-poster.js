#!/usr/bin/env node
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const INPUT = path.resolve(__dirname, '..', 'public', 'video.mp4');
const OUTPUT = path.resolve(__dirname, '..', 'public', 'video-poster.jpg');

function run(cmd, args) {
  const res = spawnSync(cmd, args, { encoding: 'utf8' });
  if (res.error) throw res.error;
  if (res.status !== 0) {
    throw new Error(`${cmd} exited ${res.status}: ${res.stderr}`);
  }
  return res.stdout;
}

function ffprobeDuration(file) {
  try {
    const out = spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', file], { encoding: 'utf8' });
    if (out.status !== 0) return null;
    const val = parseFloat(out.stdout.trim());
    return Number.isFinite(val) ? val : null;
  } catch (e) {
    return null;
  }
}

function main() {
  if (!fs.existsSync(INPUT)) {
    console.error('Input video not found:', INPUT);
    process.exit(1);
  }

  let ts = 2; // default
  const dur = ffprobeDuration(INPUT);
  if (dur) {
    // choose 10% into the video but at least 0.5s and at most dur-0.5s
    ts = Math.max(0.5, Math.min(dur * 0.1, Math.max(0.5, dur - 0.5)));
    ts = Math.round(ts * 100) / 100;
  }

  console.log(`Extracting poster at ${ts}s from ${INPUT} -> ${OUTPUT}`);

  // run ffmpeg to extract and compress (libjpeg quality)
  const args = ['-y', '-i', INPUT, '-ss', ts.toString(), '-vframes', '1', '-q:v', '2', OUTPUT];
  const ff = spawnSync('ffmpeg', args, { stdio: 'inherit' });
  if (ff.error || ff.status !== 0) {
    console.error('ffmpeg failed');
    process.exit(1);
  }

  console.log('Poster written to', OUTPUT);
}

main();
