/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Typography, Box } from '@mui/material'
import KanbanCard from './KanbanCard'
import { type CardInterface } from '../../global/GlobalTypes'
import DropIndicator from './DropIndicator'
import AddTask from './AddTask'
import CustomSkeleton from '../../utils/CustomSkeleton'
import { useTheme } from '@mui/material/styles'
import { type Theme } from '@mui/material/styles/createTheme'

interface ColumnsProps {
  title: string
  column: boolean
  cards: CardInterface[]
  adjustCards: (cards: CardInterface[]) => void
  addCard: (card: CardInterface) => void
  updateCard: (updateCard: { completed: boolean, id: number }) => Promise<CardInterface>
  removeCard: (id: number) => void
}

const ColumnContainer = styled('div')({
  width: '320px',
  flexShrink: 0,
  height: 'fit-content'
})

const ColumnBox = styled(Box)({
  paddingLeft: '1rem',
  paddingRight: '1rem',
  marginBottom: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const ColumnTypography = styled(Typography)(({ color }: { color: string }) => ({
  fontSize: '16px',
  color
}))

const CardWrapper = styled(Box)(({ active, theme }: { active: string, theme: Theme }) => ({
  height: '100%',
  width: '100%',
  padding: '0.5rem',
  transition: 'background-color 0.3s',
  border: active === 'true' ? '1px solid lightgrey' : 'none',
  borderRadius: active === 'true' ? '8px' : 'none',
  backgroundColor: active === 'true' ? theme.saral?.columnBackgroundColor : 'transparent'
}))

const Columns = ({ title, column, cards, adjustCards, addCard, updateCard, removeCard }: ColumnsProps) => {
  const theme = useTheme()
  const [active, setActive] = useState<boolean>(false)
  const filteredCards = cards.filter((c) => c.completed === column)

  const handleDragStart = (event: React.DragEvent<HTMLElement>, card: CardInterface) => {
    event.dataTransfer.setData('cardId', card.id.toString())
  }

  const generateRandomVariantID = () => {
    return Math.random() < 0.5 ? 1 : 2
  }

  const handleDragEnd = async (e: React.DragEvent<HTMLElement>) => {
    const cardId = e.dataTransfer.getData('cardId')

    try {
      await updateCard({ completed: column, id: parseInt(cardId) })

      setActive(false)
      clearHighlights(null)
      const indicators = getIndicators()
      const { element } = getNearestIndicator(e, indicators)

      const before = element?.dataset?.before !== undefined ? element.dataset.before : '-1'

      if (before !== cardId) {
        let copy = [...cards]

        let cardToTransfer = copy.find((c) => `${c.id}` === cardId)
        if (cardToTransfer == null) return
        cardToTransfer = { ...cardToTransfer, completed: column }

        copy = copy.filter((c) => `${c.id}` !== cardId)

        const moveToBack = before === '-1'

        if (moveToBack) {
          copy.push(cardToTransfer)
        } else {
          const insertAtIndex = copy.findIndex((el) => el.id === before)
          if (insertAtIndex === undefined) return

          copy.splice(insertAtIndex, 0, cardToTransfer)
        }

        adjustCards(copy)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault()
    highlightIndicator(e)

    setActive(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLElement>) => {
    setActive(false)
    clearHighlights(null)
  }

  const highlightIndicator = (e: React.DragEvent<HTMLElement>) => {
    const indicators = getIndicators()
    clearHighlights(indicators)

    const el = getNearestIndicator(e, indicators)

    el.element.style.opacity = '1'
  }

  const getNearestIndicator = (e: React.DragEvent<HTMLElement>, indicators: any) => {
    const DISTANCE_OFFSET = 50

    const el = indicators.reduce(
      (closest: any, child: any) => {
        const box = child.getBoundingClientRect()

        const offset = e.clientY - (box.top + DISTANCE_OFFSET)

        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child }
        } else {
          return closest
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1]
      }
    )

    return el
  }

  const clearHighlights = (els: any) => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const indicators = els !== null ? els : getIndicators()

    indicators.forEach((i: any) => {
      i.style.opacity = '0'
    })
  }

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${title}"]`))
  }

  return (
    <ColumnContainer>
      <ColumnBox>
        <ColumnTypography variant="h6" color={'darkgrey'}>
          {title}
        </ColumnTypography>
        <ColumnTypography variant="body2" color={theme.saral.mainScreenbackgroundColor} sx={{ background: '#0B6BCB', padding: '0.8vh', borderRadius: '50%' }}>
          {filteredCards.length}
        </ColumnTypography>
      </ColumnBox>
      <CardWrapper
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        active={active ? 'true' : 'false'}
        theme={theme}
      >
        {
          cards.length === 0
            ? <CustomSkeleton />
            : <>
              {
                filteredCards.map((card) => {
                  return (
                    <KanbanCard key={card.id} card={card}
                      removeCard={(id: number) => { removeCard(id) }}
                      variantID={generateRandomVariantID()}
                      handleDragStart={(event: React.DragEvent<HTMLElement>, card: CardInterface) => { handleDragStart(event, card) }}
                    />
                  )
                })
              }
              <DropIndicator beforeId={-1} status={column} />
              {
                !column &&
                <AddTask column={column} cards={cards} addCard={addCard} />
              }

            </>

        }

      </CardWrapper>

    </ColumnContainer>
  )
}

export default Columns
