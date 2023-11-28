import { useState } from 'react'
import CodeBlock from './components/CodeBlock/CodeBlock';
import { BrowserRouter, Router, Routes, Link, Route } from 'react-router-dom';

import './app.css';
import PrimaryLayout from './Layouts/PrimaryLayout/PrimaryLayout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import SidebarLayout from './Layouts/SidebarLayout/SidebarLayout';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PrimaryLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<SidebarLayout />}>
          <Route index element={<About />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
