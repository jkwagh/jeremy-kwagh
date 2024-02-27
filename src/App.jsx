import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Jeremy Kwagh</h1>
      <div className="card">
        <p>
          Hello, my name is Jeremy Kwagh and I am a Full-Stack Software Developer.
        </p>
      </div>
    </>
  )
}

export default App
