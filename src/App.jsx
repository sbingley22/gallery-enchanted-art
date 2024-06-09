import { useEffect, useState } from 'react'
import './App.css'
import Gallery from './components/Gallery'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = useState(1)
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    setIsMobile(mediaQuery.matches)

    const handleResize = () => {
      setIsMobile(mediaQuery.matches)
    }

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    }
  }, [])

  return (
    <>
      {mode == 1 && <Gallery isMobile={isMobile} />}
    </>
  )
}

export default App
