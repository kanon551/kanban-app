/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useState } from 'react'
import { type CardInterface } from '../global/GlobalTypes'
import { addNewTask, deleteTask, getAllTasks, updateTask } from '../global/GlobalApi'

const useTaskStateHook = () => {
  const [cards, setCards] = useState<CardInterface[]>([])

  useEffect(() => {
    fetchAllTasks()
  }, [])

  const fetchAllTasks = async () => {
    const tasksResponse = await getAllTasks()
    if (tasksResponse.todos.length !== 0) {
      setCards(tasksResponse.todos)
    }
  }

  const addCard = async (newCard: CardInterface) => {
    const addCardResponse = await addNewTask(newCard)
    console.log(addCardResponse)
    if (addCardResponse.id !== 0) {
      setCards([...cards, newCard])
    }
  }

  const updateCard = async (updateCard: { completed: boolean, id: number }): Promise<CardInterface> => {
    const updatePayload = {
      completed: updateCard.completed
    }
    const updateCardResponse = await updateTask(updatePayload, updateCard.id)
    return updateCardResponse
  }

  const adjustCards = (adjustedCards: CardInterface[]) => {
    setCards(adjustedCards)
  }

  const removeCard = async (cardId: number) => {
    const delResp = await deleteTask(cardId)
    if (delResp.id !== 0) {
      setCards(cards.filter(card => card.id !== cardId))
    }
  }
  return { cards, addCard, removeCard, adjustCards, updateCard }
}

export default useTaskStateHook
