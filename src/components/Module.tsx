import { ChevronDown } from 'lucide-react'
import { Lesson } from './Lesson'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useAppSelector } from '../store'
import { useDispatch } from 'react-redux'
import { play } from '../store/slices/player'

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}
export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  const dispatch = useDispatch()
  const { currentLessonIndex, currentModuleIndex } = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player

    return { currentLessonIndex, currentModuleIndex }
  })
  const lessons = useAppSelector(
    (state) => state.player.course.modules[moduleIndex]?.lessons,
  )
  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="flex items-center w-full gap-3 p-4 bg-zinc-800">
        <div className="flex items-center justify-center w-10 h-10 text-xs rounded-full bg-zinc-950">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-sm text-zinc-400">{amountOfLessons} aulas</span>
        </div>
        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons.map((lesson, lessonIndex) => {
            const isCurrent =
              currentLessonIndex === lessonIndex &&
              currentModuleIndex === moduleIndex
            return (
              <Lesson
                key={lesson.id}
                duration={lesson.duration}
                title={lesson.title}
                isCurrent={isCurrent}
                onPlay={() => {
                  dispatch(
                    play({
                      lessonIndex,
                      moduleIndex,
                    }),
                  )
                }}
              />
            )
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
