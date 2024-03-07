import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
}

const initialState: PlayerState = {
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  course: null,
  isLoading: true,
}

export const loadCourse = createAsyncThunk('loadCourse', async () => {
  const response = await api.get('/courses/1')

  return response.data
})

export const playerSplice = createSlice({
  name: 'player',
  initialState,
  extraReducers(builder) {
    builder.addCase(loadCourse?.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      loadCourse?.fulfilled,
      (state, action: PayloadAction<Course>) => {
        state.course = action.payload
        state.isLoading = false
      },
    )
    builder.addCase(loadCourse?.rejected, (state) => {
      state.isLoading = false
    })
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
        state.course?.modules[state.currentModuleIndex].lessons[nextLessonIndex]
      if (nextLesson?.id) {
        state.currentLessonIndex = nextLessonIndex
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1
        const nextModule = state.course?.modules[nextModuleIndex]
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
