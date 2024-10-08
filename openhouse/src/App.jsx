import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Openhouse from './pages/openhouse/Openhouse'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Openhouse />
   </>
  )
}

export default App
