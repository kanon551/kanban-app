import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Layout from './utils/Layout'
import Tasks from './pages/Tasks'
import NoPage from './pages/NoPage'
import { ThemeProvider } from '@mui/material/styles'
import theme from './utils/Theme'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Routes>
            <Route path="*" element={<Layout><NoPage /></Layout>} />
            <Route path="/" element={<Layout><Tasks /></Layout>} />
            <Route path="/tasks" element={<Layout><Tasks /></Layout>} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  )
}
export default App
