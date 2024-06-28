import { FunctionComponent, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import Explore from './pages/explore/explore.page'
import ReturnPage from './pages/return/return.page'

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/return' element={<ReturnPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
