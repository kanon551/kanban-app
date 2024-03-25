/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import GlobalStyles from '@mui/joy/GlobalStyles'
import Box from '@mui/joy/Box'
import Chip from '@mui/joy/Chip'
import IconButton from '@mui/joy/IconButton'
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton'
import ListItemContent from '@mui/joy/ListItemContent'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import { styled } from '@mui/material/styles'
import { closeSidebar, iconComponents } from '../global/GlobalFunctions'
import { useNavigate, useLocation } from 'react-router-dom'
import { type RoutingProps } from '../global/GlobalTypes'
import { useTheme } from '@mui/material/styles'

export const ImageWrapper = styled('div')({
  height: '30px',
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

interface SidebarProps {
  config: RoutingProps[]
}

export default function Sidebar ({ config }: SidebarProps) {
  const navigate = useNavigate()
  const theme = useTheme()
  const location = useLocation()
  const breadcrumbs = location.pathname

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: 'fixed', md: 'sticky' },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none'
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 1000,
        height: '100dvh',
        width: theme.saral.sideBarWidth,
        top: 0,
        padding: theme.saral.sideBarPadding,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.saral.sideBarGap,
        borderRight: '1px solid',
        borderColor: 'divider',
        backgroundColor: theme.saral.cleanWhite
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '220px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '240px'
            }
          }
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)'
          }
        }}
        onClick={() => { closeSidebar() }}
      />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <IconButton variant="soft" color="primary" size="sm" sx={{ background: 'none' }}>
        <ImageWrapper>
          <CardImage src='https://media.licdn.com/dms/image/C4E0BAQHVx_k4khHmEQ/company-logo_200_200/0/1646921641892/getsaral_logo?e=1719446400&v=beta&t=cwKYWhpeuv8030_V0OXPU40pU5tE_cukxHOo9RVwj9A' alt="img" draggable="false" />
        </ImageWrapper>
        </IconButton>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography level="title-lg" sx={{ textTransform: 'uppercase' }}>Saral</Typography>
        <Typography level="body-xs" sx={{ ml: 1, textTransform: 'capitalize' }}>
        - The Influencer OS
        </Typography>
        </div>
      </Box>

      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5
          }
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': (theme) => theme.vars.radius.sm
          }}
        >
          {
            config.map((item, index) => {
              const SelectedIcon = iconComponents[item.icon]

              return (
                <ListItem key={item.id}>
                <ListItemButton onClick={() => { navigate(`${item.url}`) }}
                sx={{
                  background: breadcrumbs === `${item.url}` ? theme.saral.mainScreenbackgroundColor : null
                }}
                >
                  <SelectedIcon />
                  <ListItemContent>
                    <Typography level="title-sm">{item.label}</Typography>
                  </ListItemContent>
                  {
                    (item.chipValue != null) &&
                    <Chip size="sm" color="primary" variant="solid">
                      {item.chipValue}
                    </Chip>
                  }
                </ListItemButton>
              </ListItem>
              )
            }

            )
          }
        </List>
        <List
          size="sm"
          sx={{
            mt: 'auto',
            flexGrow: 0,
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
            '--List-gap': '8px',
            mb: 2
          }}
        >
          <ListItem>
            <ListItemButton>
              <SettingsRoundedIcon />
              Settings
            </ListItemButton>
          </ListItem>
        </List>

      </Box>
    </Sheet>
  )
}
