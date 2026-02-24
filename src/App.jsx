import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' bg-(--background-blue) h-auto w-auto overflow-hidden'>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
            <Navbar />
            <Hero/>
            <About/>
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
