import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Toolbar from './components/Toolbar'
import Settings from './components/Settings'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Toolbar />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default App
