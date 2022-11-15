import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export interface ITodoItem {
  id?: string
  title: string
  createdAt: number
  isDone: boolean
}

export interface ITodo {
  todos: ITodoItem[]
}

export interface ITodoCheckbox {
  id: string
  isDone: boolean
}

const initialState: ITodo = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addNewNote: (state, action: PayloadAction<ITodoItem>) => {
      const todoItem = action.payload
      todoItem.id = uuidv4()

      state.todos.push(action.payload)
    },

    makeNoteDone: (state, action: PayloadAction<ITodoCheckbox>) => {
      const { id, isDone } = action.payload

      const index = state.todos.findIndex((t) => t.id === id)

      state.todos[index].isDone = isDone
    },

    deleteNote: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex((t) => t.id === action.payload)

      state.todos.splice(index, 1)
    },
  },
})

export const { addNewNote, makeNoteDone, deleteNote } = todoSlice.actions

export default todoSlice.reducer
