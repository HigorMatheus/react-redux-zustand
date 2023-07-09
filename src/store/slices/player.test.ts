import { describe, it, expect } from 'vitest'
import { player as reducer, play, next, PlayerState } from './player'

const exempleState: PlayerState = {
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  isLoading: false,
  course: {
    id: 1,
    name: 'React Js',
    modules: [
      {
        id: 1,
        title: 'Iniciando com React',
        lessons: [
          { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
          {
            id: 'w-DW4DhDfcw',
            title: 'Estilização do Post',
            duration: '10:05',
          },
        ],
      },
      {
        id: 2,
        title: 'Estrutura da aplicação',
        lessons: [
          {
            id: 'gE48FQXRZ_o',
            title: 'Componente: Comment',
            duration: '13:45',
          },
          { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' },
        ],
      },
    ],
  },
}
describe('player slice', () => {
  it('should be able to play the video', async () => {
    const state = reducer(
      exempleState,
      play({
        moduleIndex: 1,
        lessonIndex: 2,
      }),
    )
    expect(state.currentModuleIndex).toBe(1)
    expect(state.currentLessonIndex).toBe(2)
  })
  it('should be able to play the video automatically', async () => {
    const state = reducer(exempleState, next())
    expect(state.currentModuleIndex).toBe(0)
    expect(state.currentLessonIndex).toBe(1)
  })
  it('should be able to jump the next module automatically ', async () => {
    const state = reducer(
      { ...exempleState, currentModuleIndex: 0, currentLessonIndex: 1 },
      next(),
    )
    expect(state.currentModuleIndex).toBe(1)
    expect(state.currentLessonIndex).toBe(0)
  })
  it('should te not update the current module lesson index if there is not next lesson available ', async () => {
    const state = reducer(
      { ...exempleState, currentModuleIndex: 1, currentLessonIndex: 1 },
      next(),
    )
    expect(state.currentModuleIndex).toBe(1)
    expect(state.currentLessonIndex).toBe(1)
  })
})
