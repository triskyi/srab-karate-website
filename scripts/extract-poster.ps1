# PowerShell helper to extract a poster image from public\video.mp4
# Requires ffmpeg to be installed and available in PATH

param(
  [string]$Input = "public\video.mp4",
  [string]$Output = "public\video-poster.jpg",
  [string]$Time = "00:00:02"
)

if (-not (Test-Path $Input)) {
  Write-Error "Input video not found: $Input"
  exit 1
}

& ffmpeg -y -i $Input -ss $Time -vframes 1 $Output
Write-Host "Wrote poster: $Output"
