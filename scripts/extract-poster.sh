#!/usr/bin/env bash
# Extract a poster image from public/video.mp4
# Requires ffmpeg to be installed and on PATH.

set -euo pipefail

INPUT="public/video.mp4"
OUTPUT="public/video-poster.jpg"
TIME="00:00:02" # timestamp to capture frame

if [ ! -f "$INPUT" ]; then
  echo "Input video not found: $INPUT"
  exit 1
fi

ffmpeg -y -i "$INPUT" -ss "$TIME" -vframes 1 "$OUTPUT"
echo "Wrote poster: $OUTPUT"
