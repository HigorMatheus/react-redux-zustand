import { PlayCircle, Video } from 'lucide-react'
interface LessonProps {
  title: string
  duration: string
  isCurrent?: boolean
  onPlay: () => void
}
export function Lesson({
  duration,
  onPlay,
  title,
  isCurrent = false,
}: LessonProps) {
  return (
    <button
      data-active={isCurrent}
      onClick={onPlay}
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 data-[active=false]:hover:text-zinc-100"
    >
      {isCurrent ? (
        <PlayCircle className="w-4 h-4 text-emerald-400" />
      ) : (
        <Video className="w-4 h-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  )
}
