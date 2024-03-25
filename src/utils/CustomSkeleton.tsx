/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Card from '@mui/joy/Card'
import Skeleton from '@mui/joy/Skeleton' // Corrected import
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'

const CustomSkeleton = () => {
  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Card variant="outlined" sx={{ display: 'flex', gap: 2 }}>
          <AspectRatio ratio="21/9">
            <Skeleton variant="overlay">
              <img
                alt=""
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              />
            </Skeleton>
          </AspectRatio>
          <Typography>
            <Skeleton>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and
              publishing industries.
            </Skeleton>
          </Typography>
        </Card>
        <Card variant="outlined" sx={{ display: 'flex', gap: 2 }}>
          <AspectRatio ratio="21/9">
            <Skeleton variant="overlay">
              <img
                alt=""
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              />
            </Skeleton>
          </AspectRatio>
          <Typography>
            <Skeleton>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and
              publishing industries.
            </Skeleton>
          </Typography>
        </Card>
      </Stack>
    </div>

  )
}

export default CustomSkeleton
