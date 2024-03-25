/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import { styled } from '@mui/material/styles'
import Board from '../components/Kanban/Board'

export const KanbanContainer = styled('div')({
  height: '70vh',
  width: '100%',
  backgroundColor: '#F8F8FF',
  color: '#FFFFFF'
})

const Tasks = () => {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: { sm: -25, md: -25 },
        zIndex: 995
      }}
    >
      <Box sx={{ px: { xs: 2, md: 6 }, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography level="h4" component="h4">
          Kanban Board
        </Typography>
      </Box>
      <KanbanContainer>
        <Board />
      </KanbanContainer>
    </Box>
  )
}

export default Tasks
