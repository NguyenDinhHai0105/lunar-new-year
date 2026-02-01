import { useEffect, useRef, useState } from 'react'

// Use Vite's glob import to get all mp3 files from the directory
const musicModules = import.meta.glob('../assets/tet-music/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
})

const musicFiles = Object.values(musicModules) as string[]

function getInitialPlayState() {
  try {
    const raw = localStorage.getItem('music_playing')
    if (raw === '0') return false
    if (raw === '1') return true
  } catch {
    return true
  }

  return true
}

export default function MusicPlayer() {
  const [playlist] = useState<string[]>(() => [...musicFiles].sort(() => Math.random() - 0.5))
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(getInitialPlayState)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
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
             audioRef.current.play().catch(() => setAutoplayBlocked(true))
           }
      }
    }
  }, [currentTrackIndex, playlist, isPlaying])

  // Watch isPlaying to toggle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          setAutoplayBlocked(true)
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    if (!autoplayBlocked) return

    const unlock = () => {
      setAutoplayBlocked(false)
      setIsPlaying(true)
    }

    document.addEventListener('click', unlock)
    document.addEventListener('touchstart', unlock)
    document.addEventListener('keydown', unlock)

    return () => {
      document.removeEventListener('click', unlock)
      document.removeEventListener('touchstart', unlock)
      document.removeEventListener('keydown', unlock)
    }
  }, [autoplayBlocked])

  useEffect(() => {
    try {
      localStorage.setItem('music_playing', isPlaying ? '1' : '0')
    } catch {
      return
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
