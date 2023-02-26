import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ThemeContext } from '../context/ThemeContext'

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <header>
      <nav>
        <h3>React Context</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <button onClick={toggleTheme}>
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
