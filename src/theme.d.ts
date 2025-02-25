/* eslint-disable @typescript-eslint/no-unused-vars */
import { ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {

  interface Theme {
    saral: {
      mainScreenPadding: string
      mainScreenbackgroundColor: string
      columnBackgroundColor: string
      cleanWhite: string
      sideBarPadding: string
      sideBarGap: string
      kanbanCardV1: {
        width: string
        padding: string
        borderRadius: string
        gap: string
        innerGap: string
      }
      sideBarWidth: {
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
      }
    }
  }
  interface ThemeOptions {
    saral?: {
      mainScreenPadding: string
      mainScreenbackgroundColor: string
      columnBackgroundColor: string
      cleanWhite: string
      sideBarPadding: string
      sideBarGap: string
      kanbanCardV1: {
        width: string
        padding: string
        borderRadius: string
        gap: string
        innerGap: string
      }
      sideBarWidth: {
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
      }
    }
  }
}
