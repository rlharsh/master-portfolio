import { useState } from 'react'
import CodeBlock from './components/CodeBlock/CodeBlock';
import { BrowserRouter, Router, Routes, Link, Route } from 'react-router-dom';

import './app.css';
import PrimaryLayout from './Layouts/PrimaryLayout/PrimaryLayout';
import Home from './Pages/Home/Home';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PrimaryLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
