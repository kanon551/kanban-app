/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { styled } from '@mui/material/styles'

interface DropIndicatorProps {
  beforeId: number
  status: boolean
}

const StyledDropIndicator = styled('div')({
  margin: '0.5rem 0',
  height: '0.5rem',
  width: '100%',
  borderRadius: '0.5rem',
  backgroundColor: '#ffffff',
  opacity: 0,
  transition: 'opacity 0.3s ease'
})

const DropIndicator = ({ beforeId, status }: DropIndicatorProps) => {
//   return (
//         <div
//           data-before={ beforeId < 1 ? `${beforeId}` : '-1'}
//           data-column={status ? 'Complete' : 'In-Complete'}
//           className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
//         />
//   )
  return <StyledDropIndicator data-before={ beforeId < 1 ? `${beforeId}` : '-1'}
            data-column={status ? 'Complete' : 'In-Complete'}
    />
}

export default DropIndicator
