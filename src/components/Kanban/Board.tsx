/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { styled } from '@mui/material/styles'
import Columns from './Columns'
import useTaskStateHook from '../../hooks/useTasksStateHook'

const BoardContainer = styled('div')({
  display: 'flex',
  height: '100%',
  width: '100%',
  gap: '5.75rem',
  overflow: 'scroll',
  padding: '1.5rem'
})

const Board = () => {
  const { cards, addCard, adjustCards, updateCard, removeCard } = useTaskStateHook()

  return (
    <BoardContainer>
      <Columns
        title="In-Complete"
        column={false}
        cards={cards}
        addCard={addCard}
        updateCard={updateCard}
        removeCard={removeCard}
        adjustCards={adjustCards}
      />
      <Columns
        title="Complete"
        column={true}
        cards={cards}
        addCard={addCard}
        updateCard={updateCard}
        removeCard={removeCard}
        adjustCards={adjustCards}
      />
    </BoardContainer>
  )
}

export default Board
