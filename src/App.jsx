import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect'
import Project from './pages/Project'
import Skill from './pages/Skill'
import NoteFound from './pages/NoteFound'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route element={<MainLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/contect" element={<Contect/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/skill' element={<Skill/>}/>

      </Route>
      <Route path='*' element={<NoteFound/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
