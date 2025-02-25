/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import React, { useState } from 'react'
import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'
import IconButton from '@mui/joy/IconButton'
import Typography from '@mui/joy/Typography'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import CardActions from '@mui/joy/CardActions'
import UTurnLeftRoundedIcon from '@mui/icons-material/UTurnLeftRounded'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { type CardInterface } from '../../global/GlobalTypes'
import Textarea from '@mui/joy/Textarea'
import CutomModal from '../CutomModal'

const StyledKanbanCard = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  color: theme.saral.cleanWhite,
  position: 'relative',
  backgroundColor: 'grab',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
  '&:active': {
    cursor: 'grabbing',
    boxShadow: 'none'
  },
  '&[draggable="true"]': {
    cursor: 'grab'
  }
}))

const StyledCardkanbanActions = styled(CardActions)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

interface VariantOneProps {
  cardData: CardInterface
  handleDrag: (event: React.DragEvent<HTMLElement>, card: CardInterface) => void
  removeCard: (cardId: number) => void
}

const KanbanCardVariant2 = ({ cardData, handleDrag, removeCard }: VariantOneProps) => {
  const theme = useTheme()

  const [todoData, setTodoData] = useState<string>(cardData.todo)
  const [editClicked, setEditClicked] = useState<boolean>(true)
  const [open, setOpen] = React.useState<boolean>(false)

  const saveThedata = () => {
    setEditClicked(!editClicked)
  }

  const deleteCard = (status: boolean, value: string) => {
    setOpen(false)
    console.log(value)
    if (value === 'OK') {
      removeCard(cardData.id)
    }
  }

  return (
    <>
      <StyledKanbanCard sx={{ width: 320, background: theme.saral.cleanWhite }}
        draggable="true"
        onDragStart={(event: React.DragEvent<HTMLElement>) => { handleDrag(event, cardData) }}
      >
        <div>
          <Textarea name={`${cardData.userId}`}
            placeholder="Type in here…"
            variant={editClicked ? 'soft' : 'outlined'}
            readOnly={editClicked}
            maxRows={4}
            value={todoData}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => { setTodoData(event.target.value) }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
              marginTop: '1vh'
            }}
          >
            <Typography level="body-xs">12th JAN</Typography>
            <Typography
              startDecorator={
                <Box
                  component="span"
                  sx={{
                    bgcolor: 'neutral.400',
                    width: '0.5em',
                    height: '0.5em',
                    borderRadius: '50%'
                  }}
                />
              }
              level="body-xs"
            >Created by: {
                cardData.userId
              }
            </Typography>
          </div>

          <Typography level="body-sm" sx={{ marginTop: '2vh' }}>
            Please use trello and designs as reference and carry on
          </Typography>
        </div>

        {
          cardData.completed
            ? <Button variant="soft" sx={{ width: '50%' }}>Completed</Button>
            : <Button variant="outlined" sx={{ width: '50%' }}>Not-Completed</Button>
        }
        <StyledCardkanbanActions>
          <Button variant="outlined"
            sx={{ visibility: !editClicked ? 'visible' : 'hidden' }}
            size="sm" onClick={saveThedata}>
            Save
          </Button>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '5px' }}>
            {
              editClicked
                ? <IconButton variant="soft" size="sm" onClick={() => { setEditClicked(!editClicked) }}>
                  <DriveFileRenameOutlineIcon />
                </IconButton>
                : <IconButton variant="soft" size="sm" onClick={() => { setEditClicked(!editClicked) }}>
                  <UTurnLeftRoundedIcon />
                </IconButton>
            }
            <IconButton variant="solid" size="sm" color='danger' onClick={() => { setOpen(true) }}>
              <DeleteOutlineIcon />
            </IconButton>
          </div>

        </StyledCardkanbanActions>
      </StyledKanbanCard>
      <CutomModal open={open} setOpen={(status: boolean, value: string) => { deleteCard(status, value) }} />
    </>

  )
}

export default KanbanCardVariant2
