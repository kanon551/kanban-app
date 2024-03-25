/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios'
import { type DeleteResponse, type CardInterface, type TasksResponse } from './GlobalTypes'

export const authAxios = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getAllTasks = async (): Promise<TasksResponse> => {
  try {
    const res = await authAxios.get('/todos')
    return res.data
  } catch (err) {
    const errorResponse = {
      todos: [],
      total: 0,
      skip: 0,
      limit: 0
    }
    return errorResponse
  }
}

export const addNewTask = async (payload: CardInterface): Promise<CardInterface> => {
  try {
    const res = await authAxios.post('/todos/add', JSON.stringify(payload))
    return res.data
  } catch (err) {
    const errorResponse = {
      id: 0,
      todo: '',
      completed: false,
      userId: 0
    }
    return errorResponse
  }
}

export const updateTask = async (payload: { completed: boolean }, id: number): Promise<CardInterface> => {
  try {
    const res = await authAxios.put(`/todos/${id}`, JSON.stringify(payload))
    return res.data
  } catch (err) {
    const errorResponse = {
      id: 0,
      todo: '',
      completed: false,
      userId: 0
    }
    return errorResponse
  }
}

export const deleteTask = async (id: number): Promise<DeleteResponse> => {
  try {
    const res = await authAxios.delete(`/todos/${id}`)
    return res.data
  } catch (err) {
    const errorResponse = {
      id: 0,
      todo: '',
      completed: false,
      userId: 0,
      isDeleted: false,
      deletedOn: ''
    }
    return errorResponse
  }
}
