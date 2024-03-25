/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import { styled } from '@mui/material/styles'

export const ImageWrapper = styled('div')({
  margin: '1vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const CardImage = styled('img')({
  width: '-webkit-fill-available',
  height: '-webkit-fill-available',
  borderRadius: '8px',
  objectFit: 'cover',
  border: '4px solid #fff'
})

const NoPage = () => {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: { sm: -25, md: -25 },
        borderRadius: '24px',
        bgcolor: 'background.body',
        zIndex: 995
      }}
    >
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <Typography level="h4" component="h4" sx={{ mb: 2 }}>
          Sorry ! Page not Found
        </Typography>
      </Box>

      <ImageWrapper>
        <CardImage src='https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png' alt="img" draggable="false" />
      </ImageWrapper>

    </Box>
  )
}

export default NoPage
