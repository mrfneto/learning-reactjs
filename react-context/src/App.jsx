import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

import { ThemeContext } from './context/ThemeContext'

export default function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <div className={`app ${theme === 'dark' ? 'dark-theme' : ''}`}>
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}
