import { useState } from 'react'
import CodeBlock from './components/CodeBlock/CodeBlock';
import { BrowserRouter, Router, Routes, Link, Route } from 'react-router-dom';

import './app.css';
import PrimaryLayout from './Layouts/PrimaryLayout/PrimaryLayout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import SidebarLayout from './Layouts/SidebarLayout/SidebarLayout';
import Summary from './Pages/NavPages/Professional/Summary';

import { DataProvider } from './Providers/DataContext';

function App() {
  return (
    <DataProvider>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PrimaryLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<SidebarLayout />}>
          <Route path='/about/professional' element={<About />} />
          <Route path='/about/professional/summary' element={<About />} />
          <Route path='/about/professional/skills' element={<About />} />
          <Route path='/about/professional/experience' element={<About />} />
          <Route path='/about/professional/philosophy' element={<About />} />
          <Route path='/about/professional/goals' element={<About />} />
          <Route path='/about/professional/interests' element={<About />} />
          <Route path='/about/professional/achievements' element={<About />} />

          <Route path='/about/personal/hobbies' element={<About />} />
          <Route path='/about/personal/goals' element={<About />} />
          <Route path='/about/personal/education' element={<About />} />
          <Route path='/about/personal/volunteering' element={<About />} />
          <Route path='/about/personal/projects' element={<About />} />
          <Route path='/about/personal/travel' element={<About />} />
          <Route path='/about/personal/wellness' element={<About />} />

          <Route path='/about/hobbies/gaming' element={<About />} />
          <Route path='/about/hobbies/nature' element={<About />} />
          <Route path='/about/hobbies/music' element={<About />} />

          <Route path='/about/personal' element={<About />} />
          <Route path='/about/hobbies' element={<About />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </DataProvider>
  )
}

export default App
