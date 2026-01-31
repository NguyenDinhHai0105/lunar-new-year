import { useEffect, useRef, useState } from 'react'

// Use Vite's glob import to get all mp3 files from the directory
const musicModules = import.meta.glob('../assets/tet-music/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
})

const musicFiles = Object.values(musicModules) as string[]

export default function MusicPlayer() {
  const [playlist] = useState<string[]>(() => [...musicFiles].sort(() => Math.random() - 0.5))
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Handle track change
  useEffect(() => {
    if (playlist.length > 0 && audioRef.current) {
      // Only update src if it's different to prevent reloading on every render
      const nextSrc = playlist[currentTrackIndex]
      // Vite dev server might wrap urls, so we just check if it ends with the filename or matches
      if (!audioRef.current.src.endsWith(nextSrc) && audioRef.current.src !== nextSrc) {
           audioRef.current.src = nextSrc
           if (isPlaying) {
             audioRef.current.play().catch((e) => console.log('Playback error:', e))
           }
      }
    }
  }, [currentTrackIndex, playlist, isPlaying])

  // Watch isPlaying to toggle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((e) => {
            console.log('Play blocked/failed:', e)
            setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const handleEnded = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length)
  }

  const togglePlay = () => {
    setIsPlaying((prev) => !prev)
  }

  if (playlist.length === 0) return null

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        onEnded={handleEnded}
        preload="auto"
      />
      <button 
        type="button"
        className={`btn btn--ghost music-toggle ${isPlaying ? 'playing' : ''}`}
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </div>
  )
}
