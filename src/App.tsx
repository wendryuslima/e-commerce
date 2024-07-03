import { FunctionComponent, useState, useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import ReturnPage from './pages/return/return.page'
import SignUp from './pages/sign-up/sign-up.page'
import { auth, db } from './config/firebase.config'
import { onAuthStateChanged } from 'firebase/auth'
import { UserContext } from './contexts/user.context'
import { collection, getDocs, query, where } from 'firebase/firestore'

const App: FunctionComponent = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSignOut = isAuthenticated && !user
    if (isSignOut) {
      return logoutUser()
    }

    const isSignIn = isAuthenticated && user
    if (isSignIn) {
      const querySnaptshot = await getDocs(
        query(collection(db, 'users'), where('id', '==', user.uid))
      )

      const userFromFirestore = querySnaptshot.docs[0]?.data()
      return loginUser(userFromFirestore as any)
    }
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
