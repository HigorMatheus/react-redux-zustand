import { useCurrentLesson, usePlayStore } from '../store'

export function Header() {
  const { currentLesson, currentModule } = useCurrentLesson()
  // const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  const isLoading = usePlayStore((state) => state.isLoading)

  if (isLoading) {
    return <h1 className="text-2xl font-bold">Carregando...</h1>
  }
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">
        Modulo &quot;{currentModule?.title}&quot;
      </span>
    </div>
  )
}
