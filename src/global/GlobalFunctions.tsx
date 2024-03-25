/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'
import { type IconComponents } from './GlobalTypes'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded'
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded'
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded'
import WarningRoundedIcon from '@mui/icons-material/WarningRounded'

export function openSidebar () {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.setProperty('--SideNavigation-slideIn', '1')
  }
}

export function closeSidebar () {
  if (typeof window !== 'undefined') {
    document.documentElement.style.removeProperty('--SideNavigation-slideIn')
    document.body.style.removeProperty('overflow')
  }
}

export function toggleSidebar () {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const slideIn = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--SideNavigation-slideIn')
    if (slideIn) {
      closeSidebar()
    } else {
      openSidebar()
    }
  }
}

export const iconComponents: IconComponents = {
  GridViewRoundedIcon,
  NotificationsRoundedIcon,
  AnalyticsRoundedIcon,
  Groups2RoundedIcon,
  FormatListNumberedRoundedIcon,
  WarningRoundedIcon
}
