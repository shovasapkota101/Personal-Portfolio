import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' '>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Navbar/>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
