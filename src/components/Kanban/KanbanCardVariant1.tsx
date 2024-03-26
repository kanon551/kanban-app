/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import React, { useState } from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'
import IconButton from '@mui/joy/IconButton'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded'
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import CardActions from '@mui/joy/CardActions'
import UTurnLeftRoundedIcon from '@mui/icons-material/UTurnLeftRounded'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { type CardInterface } from '../../global/GlobalTypes'
import Textarea from '@mui/joy/Textarea'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import CheckIcon from '@mui/icons-material/Check'
import Chip from '@mui/joy/Chip'
import CutomModal from '../CutomModal'

const StyledKanbanCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.saral.kanbanCardV1.borderRadius,
  color: theme.saral.cleanWhite,
  padding: theme.saral.kanbanCardV1.padding,
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

const KanbanCardVariant1 = ({ cardData, handleDrag, removeCard }: VariantOneProps) => {
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
      <StyledKanbanCard sx={{ width: theme.saral.kanbanCardV1.width, background: theme.saral.cleanWhite }}
        draggable="true"
        onDragStart={(event: React.DragEvent<HTMLElement>) => { handleDrag(event, cardData) }}
      >
        <div style={{ gap: theme.saral.kanbanCardV1.gap }}>
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
              gap: theme.saral.kanbanCardV1.innerGap,
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
        <AspectRatio minHeight="70px" maxHeight="120px">
          <img
            style={{ borderRadius: '8px' }}
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpkciP4L75kcFoAl10Y0NFf8KBPvfib9AkQKjdVCFakpV72fbl"
            srcSet="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpkciP4L75kcFoAl10Y0NFf8KBPvfib9AkQKjdVCFakpV72fbl"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <Stack spacing={2} direction="row" alignItems="center">
          <Stack>
            <InsertLinkRoundedIcon />
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography noWrap>
              {
                'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpkciP4L75kcFoAl10Y0NFf8KBPvfib9AkQKjdVCFakpV72fbl'
              }
            </Typography>
          </Stack>
          <Stack>
            <AttachFileRoundedIcon />
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography noWrap>{'ziondesignstudio.com'}</Typography>
          </Stack>
        </Stack>
        <Chip
          variant="solid"
          color={cardData.completed ? 'success' : 'danger'}
          size="sm"
          sx={{ position: 'absolute', top: '0%', right: '0px', borderTopRightRadius: '12px !important', borderBottomRightRadius: '0px !important' }}
          endDecorator={
            cardData.completed ? <CheckIcon /> : <AutorenewIcon />

          }
        >
          {
            cardData.completed ? 'Completed' : 'Not Completed'
          }
        </Chip>
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

export default KanbanCardVariant1
