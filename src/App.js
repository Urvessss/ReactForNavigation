import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './componets/Home';
import DropdownPage from './pages/DropdownPage';
import AccordionPage from './pages/AccordionPage';
import Header from './componets/Header';
import  ModelPage  from './pages/ModelPage';
import TablePage from './pages/TablePage';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dropdown' element={<DropdownPage/>}/>
      <Route path='/act' element={<AccordionPage/>}/>
      <Route path='/model' element={<ModelPage/>}/>
      <Route path='/table' element={<TablePage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App