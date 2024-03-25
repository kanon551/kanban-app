/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { type CardInterface } from '../../global/GlobalTypes'
import Textarea from '@mui/joy/Textarea'
import Button from '@mui/joy/Button'
import { motion } from 'framer-motion'
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded'
import { styled } from '@mui/material/styles'

interface AddTaskProps {
  column: boolean
  cards: CardInterface[]
  addCard: (card: CardInterface) => void
}

const ButtonContainer = styled('div')({
  marginTop: '1.5rem',
  marginBottom: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '0.5rem'
})

const AddTask = ({ column, cards, addCard }: AddTaskProps) => {
  const [text, setText] = useState<string>('')
  const [adding, setAdding] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const randomUserId = Math.floor(Math.random() * 100) + 1

    if (text.trim().length === 0) return

    addCard({
      id: cards.length + 1,
      todo: text.trim(),
      completed: column,
      userId: randomUserId
    })
    setAdding(false)
  }

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <Textarea
            placeholder="Add new task..."
            variant={'outlined'}
            maxRows={4}
            sx={{ marginTop: '1vh', marginBottom: '1vh', width: '100%' }}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => { setText(event.target.value) }}
          />
          <ButtonContainer>
            <Button variant="solid" color="danger" onClick={() => { setAdding(false) }}>
              Close
            </Button>
            <Button type="submit" variant="solid" color="primary">
              Add
            </Button>
          </ButtonContainer>
        </motion.form>
      ) : (
        <Button
          endDecorator={<FormatListNumberedRoundedIcon />}
          onClick={() => { setAdding(true) }}
        >Add a task
        </Button>
      )}
    </>
  )
}

export default AddTask
