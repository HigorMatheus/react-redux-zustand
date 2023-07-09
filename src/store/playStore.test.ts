import { describe, it, expect, beforeEach } from 'vitest'
// import { player as reducer, play, next, PlayerState } from './player'
import { usePlayStore as store } from './index'
const course = {
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
}

const initialState = store.getState()
describe('player slice', () => {
  beforeEach(() => {
    store.setState(initialState)
  })
  it('should be able to play the video', async () => {
    const { play } = store.getState()
    play({
      moduleIndex: 1,
      lessonIndex: 2,
    })

    const { currentLessonIndex, currentModuleIndex } = store.getState()

    expect(currentModuleIndex).toBe(1)
    expect(currentLessonIndex).toBe(2)
  })
  it('should be able to play the video automatically', async () => {
    store.setState({ course })
    const { next } = store.getState()

    next()
    const { currentLessonIndex, currentModuleIndex } = store.getState()

    expect(currentModuleIndex).toBe(0)
    expect(currentLessonIndex).toBe(1)
  })
  it('should be able to jump the next module automatically ', async () => {
    store.setState({ course, currentModuleIndex: 0, currentLessonIndex: 1 })
    const { next } = store.getState()
    next()

    const { currentLessonIndex, currentModuleIndex } = store.getState()

    expect(currentModuleIndex).toBe(1)
    expect(currentLessonIndex).toBe(0)
  })
  it('should te not update the current module lesson index if there is not next lesson available ', async () => {
    store.setState({
      course,
      currentModuleIndex: 1,
      currentLessonIndex: 1,
    })
    const { next } = store.getState()
    next()
    const { currentLessonIndex, currentModuleIndex } = store.getState()
    expect(currentModuleIndex).toBe(1)
    expect(currentLessonIndex).toBe(1)
  })
})
