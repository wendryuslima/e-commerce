import { FunctionComponent, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import ReturnPage from './pages/return/return.page'
import SignUp from './pages/sign-up/sign-up.page'
import { auth } from './config/firebase.config'
import { onAuthStateChanged } from 'firebase/auth'

const App: FunctionComponent = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/return' element={<ReturnPage />} />
        <Route path='/sign' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
