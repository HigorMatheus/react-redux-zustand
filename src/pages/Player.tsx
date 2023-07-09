import { MessageCircle } from 'lucide-react'

import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Module } from '../components/Module'
import { useAppDispatch, useAppSelector } from '../store'
import { useEffect } from 'react'
import { loadCourse } from '../store/slices/player'

export function Player() {
  const dispatch = useAppDispatch()
  const { course } = useAppSelector((state) => state.player)

  useEffect(() => {
    dispatch(loadCourse())
  }, [dispatch])

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-950 text-zinc-50">
      <div className="flex w-11/12 max-w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white transition-colors rounded bg-violet-500 hover:bg-violet-600 ">
            <MessageCircle className="w-4 h-4" />
            Deixar Feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden border rounded-lg shadow pr-80 border-zinc-800 bg-zinc-900">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="absolute top-0 bottom-0 right-0 overflow-y-scroll border-l divide-y-2 w-80 divide-zinc-900 border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {course?.modules?.map((module, index) => (
              <Module
                key={module.id}
                moduleIndex={index}
                title={module.title}
                amountOfLessons={module.lessons.length}
              />
            ))}
          </aside>
        </main>
      </div>
    </div>
  )
}
