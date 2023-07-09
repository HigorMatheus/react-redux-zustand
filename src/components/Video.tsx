import ReactPlayer from 'react-player'

import { Loader } from 'lucide-react'
import { useCurrentLesson, usePlayStore } from '../store'

export function Video() {
  const { currentLesson } = useCurrentLesson()

  const { isLoading, next } = usePlayStore((state) => ({
    isLoading: state.isLoading,
    next: state.next,
  }))

  const handlePlayNext = () => {
    next()
  }
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  )
}
