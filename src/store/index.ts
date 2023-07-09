import { create } from 'zustand'
import { api } from '../lib/axios'

interface Course {
  id: number
  name: string
  modules: Array<{
    id: number
    title: string
    lessons: Array<{
      id: string
      title: string
      duration: string
    }>
  }>
}

export interface PlayerState {
  currentModuleIndex: number
  currentLessonIndex: number
  course: Course | null
  isLoading: boolean
  play: (data: { lessonIndex: number; moduleIndex: number }) => void
  next(): void
  load: () => Promise<void>
}

export const usePlayStore = create<PlayerState>((set, get) => {
  return {
    currentModuleIndex: 0,
    currentLessonIndex: 0,
    course: null,
    isLoading: true,
    load: async () => {
      set({
        isLoading: true,
      })
      const response = await api.get('/courses/1')

      set({
        course: response.data,
        isLoading: false,
      })
    },
    play: (data: { lessonIndex: number; moduleIndex: number }) => {
      set(() => ({
        currentLessonIndex: data.lessonIndex,
        currentModuleIndex: data.moduleIndex,
      }))
    },
    next() {
      const { course, currentLessonIndex, currentModuleIndex } = get()

      const nextLessonIndex = currentLessonIndex + 1
      const nextLesson =
        course?.modules[currentModuleIndex].lessons[nextLessonIndex]
      if (nextLesson?.id) {
        set({
          currentLessonIndex: nextLessonIndex,
        })
      } else {
        const nextModuleIndex = currentModuleIndex + 1
        const nextModule = course?.modules[nextModuleIndex]
        if (nextModule?.id) {
          set({
            currentModuleIndex: nextModuleIndex,
            currentLessonIndex: 0,
          })
        }
      }
    },
  }
})

export function useCurrentLesson() {
  return usePlayStore((state) => {
    const { currentLessonIndex, currentModuleIndex } = state

    const currentModule = state?.course?.modules[currentModuleIndex]

    const currentLesson = currentModule?.lessons[currentLessonIndex]

    return {
      currentLesson,
      currentModule,
    }
  })
}
