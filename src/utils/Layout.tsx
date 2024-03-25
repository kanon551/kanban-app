/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import Box from '@mui/joy/Box'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { type Props, type RoutingProps } from '../global/GlobalTypes'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

const routingsConfig: RoutingProps[] = [
  {
    id: 1,
    label: 'Tasks',
    url: '/tasks',
    icon: 'GridViewRoundedIcon',
    chipValue: 4
  },
  {
    id: 2,
    label: 'Notifications',
    url: '/notifications',
    icon: 'NotificationsRoundedIcon',
    chipValue: 7
  },
  {
    id: 3,
    label: 'Analytics',
    url: '/analytics',
    icon: 'AnalyticsRoundedIcon',
    chipValue: null
  },
  {
    id: 4,
    label: 'Team',
    url: '/team',
    icon: 'Groups2RoundedIcon',
    chipValue: 2
  }
]

const Layout = (props: Props) => {
  const { children } = props

  return (
        <CssVarsProvider disableTransitionOnChange>
          <CssBaseline />
          <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
            <Sidebar config={routingsConfig} />
            <Header />
            <Box
              component="main"
              className="MainContent"
              sx={{
                pt: { xs: 'calc(12px + var(--Header-height))', md: 3 },
                pb: { xs: 2, sm: 2, md: 3 },
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
                height: '100dvh',
                gap: 1,
                overflow: 'auto'
              }}
            >
              <Box sx={{ flex: 1, width: '100%', background: '#F8F8FF', padding: '80px 40px 40px 40px' }}>
              {
              children
            }
              </Box>

            </Box>
          </Box>
        </CssVarsProvider>
  )
}

export default Layout
