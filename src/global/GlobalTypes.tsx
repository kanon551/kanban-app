import { type SvgIconComponent } from '@mui/icons-material'

export type IconComponents = Record<string, SvgIconComponent>

export interface Props {
  /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
  window?: () => Window
  children: React.ReactElement
}

export interface RoutingProps {
  id: number
  label: string
  url: string
  icon: string
  chipValue: number | null
}

export interface CardInterface {
  id: number
  todo: string
  completed: boolean
  userId: number
}

export interface TasksResponse {
  todos: CardInterface[]
  total: number
  skip: number
  limit: number
}

export interface DeleteResponse {
  id: number
  todo: string
  completed: boolean
  userId: number
  isDeleted: boolean
  deletedOn: string
}
