import React from 'react'
import {Route, Routes} from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from 'react-hot-toast'


const App = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#f1f5f9_30%,#94a3b880_100%)]" />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/notes" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage/>} />
        <Route path="/note/:id" element={<NoteDetailPage/>} />
      </Routes>
    </div>
  )
}

export default App