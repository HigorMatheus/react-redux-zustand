import { ThemeProvider } from 'components/theme-provider'
import { Home } from './pages/Home'
import './styles/global.css'
// import { Player } from './pages/Player'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="app-test">
      <Home />
    </ThemeProvider>
  )
}

export default App
