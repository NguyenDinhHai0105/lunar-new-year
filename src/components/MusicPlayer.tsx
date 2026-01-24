import { useEffect, useRef, useState } from 'react'

// Use Vite's glob import to get all mp3 files from the directory
const musicModules = import.meta.glob('../assets/tet-music/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
})

const musicFiles = Object.values(musicModules) as string[]

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<string[]>([])
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Shuffle music on mount
  useEffect(() => {
    const shuffled = [...musicFiles].sort(() => Math.random() - 0.5)
    setPlaylist(shuffled)
  }, [])

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

  // Global auto-play / interaction unlock
  useEffect(() => {
    const unlockAudio = () => {
        if (playlist.length > 0 && !isPlaying) {
            setIsPlaying(true)
        }
        // Once interacted, remove listeners
        document.removeEventListener('click', unlockAudio)
        document.removeEventListener('touchstart', unlockAudio)
        document.removeEventListener('keydown', unlockAudio)
    }

    // Try to play immediately (might be blocked)
    if (playlist.length > 0) {
        setIsPlaying(true)
    }

    // Add listeners to unlock if blocked
    document.addEventListener('click', unlockAudio)
    document.addEventListener('touchstart', unlockAudio)
    document.addEventListener('keydown', unlockAudio)

    return () => {
        document.removeEventListener('click', unlockAudio)
        document.removeEventListener('touchstart', unlockAudio)
        document.removeEventListener('keydown', unlockAudio)
    }
  }, [playlist.length]) // Run once when playlist is ready

  const handleEnded = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
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
