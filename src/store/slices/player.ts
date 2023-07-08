import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useAppSelector } from '..'

const playerSplice = createSlice({
  name: 'player',
  initialState: {
    currentModuleIndex: 0,
    currentLessonIndex: 0,
    course: {
      modules: [
        {
          id: '1',
          title: 'Iniciando com React',
          lessons: [
            { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
            {
              id: 'w-DW4DhDfcw',
              title: 'Estilização do Post',
              duration: '10:05',
            },
            {
              id: 'D83-55LUdKE',
              title: 'Componente: Header',
              duration: '06:33',
            },
            {
              id: 'W_ATsETujaY',
              title: 'Componente: Sidebar',
              duration: '09:12',
            },
            { id: 'Pj8dPeameYo', title: 'CSS Global', duration: '03:23' },
            {
              id: '8KBq2vhwbac',
              title: 'Form de comentários',
              duration: '11:34',
            },
          ],
        },
        {
          id: '2',
          title: 'Estrutura da aplicação',
          lessons: [
            {
              id: 'gE48FQXRZ_o',
              title: 'Componente: Comment',
              duration: '13:45',
            },
            { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' },
            {
              id: 'h5JA3wfuW1k',
              title: 'Interações no JSX',
              duration: '06:33',
            },
            {
              id: '1G0vSTqWELg',
              title: 'Utilizando estado',
              duration: '09:12',
            },
          ],
        },
      ],
    },
  },
  reducers: {
    play: (
      state,
      action: PayloadAction<{ lessonIndex: number; moduleIndex: number }>,
    ) => {
      state.currentLessonIndex = action.payload.lessonIndex
      state.currentModuleIndex = action.payload.moduleIndex
    },
    next(state) {
      const nextLessonIndex = state.currentLessonIndex + 1
      const nextLesson =
        state.course.modules[state.currentModuleIndex].lessons[nextLessonIndex]
      if (nextLesson?.id) {
        state.currentLessonIndex = nextLessonIndex
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1
        const nextModule = state.course.modules[nextModuleIndex]
        if (nextModule?.id) {
          state.currentModuleIndex = nextModuleIndex
          state.currentLessonIndex = 0
        }
      }
    },
  },
})

export const player = playerSplice.reducer

export const { play, next } = playerSplice.actions

export function useCurrentLesson() {
  return useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player

    const currentModule = state.player.course.modules[currentModuleIndex]

    const currentLesson = currentModule.lessons[currentLessonIndex]

    return {
      currentLesson,
      currentModule,
    }
  })
}
