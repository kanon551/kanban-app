/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import DropIndicator from './DropIndicator'
import { type CardInterface } from '../../global/GlobalTypes'
import { motion } from 'framer-motion'
import KanbanCardVariant1 from './KanbanCardVariant1'
import KanbanCardVariant2 from './KanbanCardVariant2'

interface KanbanCardProps {
  card: CardInterface
  handleDragStart: (event: React.DragEvent<HTMLElement>, card: CardInterface) => void
  variantID: number
  removeCard: (cardId: number) => void
}

const KanbanCard = ({ card, handleDragStart, variantID, removeCard }: KanbanCardProps) => {
  return (
    <>
        <DropIndicator beforeId={card.id} status={card.completed} />

        {/* <motion.div
        layout
        layoutId={`${card.id}`}
        draggable="true"
        >

         <StyledKanbanCard
         variant="outlined"
         draggable="true"
         onDragStart={(event: React.DragEvent<HTMLElement>) => { handleDragStart(event, card) }}>
                <StyledCardKanbanContent>
                <Textarea name={`${card.userId}`}
                placeholder="Type in here…"
                variant={editClicked ? 'soft' : 'outlined'}
                readOnly={editClicked}
                maxRows={4}
                value={todoData}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => { setTodoData(event.target.value) }}
                />
                </StyledCardKanbanContent>
                <StyledCardkanbanActions>
                            <Button variant="outlined"
                                sx={{ visibility: !editClicked ? 'visible' : 'hidden' }}
                                size="sm" onClick={ () => { setEditClicked(!editClicked) }}>
                                    Save
                            </Button>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '5px' }}>
                    {
                        editClicked
                          ? <Button variant="soft" size="sm" onClick={ () => { setEditClicked(!editClicked) }}>
                                Edit
                            </Button>
                          : <IconButton variant="soft" size="sm" onClick={ () => { setEditClicked(!editClicked) }}>
                                <UTurnLeftRoundedIcon />
                            </IconButton>
                    }
                    <Button variant="solid" size="sm" color='danger'>
                        Delete
                    </Button>
                    </div>

                </StyledCardkanbanActions>
          </StyledKanbanCard>
        </motion.div> */}
        {
            variantID === 1 &&
            <motion.div
            layout
            layoutId={`${card.id}`}
            draggable="true"
            >
            <KanbanCardVariant1 cardData={card}
            removeCard={(cardId: number) => { removeCard(cardId) }}
            handleDrag={(event: React.DragEvent<HTMLElement>) => { handleDragStart(event, card) }}/>
            </motion.div>

        }
        {
            variantID === 2 &&
            <motion.div
            layout
            layoutId={`${card.id}`}
            draggable="true"
        >
            <KanbanCardVariant2 cardData={card}
            removeCard={(cardId: number) => { removeCard(cardId) }}
            handleDrag={(event: React.DragEvent<HTMLElement>) => { handleDragStart(event, card) }}/>
        </motion.div>
        }

    </>

  )
}

export default KanbanCard
