import { FunctionComponent, useState, useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUp from './pages/sign-up/sign-up.page'
import { auth, db } from './config/firebase.config'
import { onAuthStateChanged } from 'firebase/auth'
import { UserContext } from './contexts/user.context'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { userConverter } from './converters/firestore.converters'
import Loading from './components/loading/loading.component'
import ExplorePage from './pages/explore/explore.page'
import CategoryDetailsPage from './pages/category-details/category-details-component'
import Cart from './components/cart/cart-component'

const App: FunctionComponent = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)
  const [isInitializing, setInitializing] = useState(true) // Corrigido setInitializang para setInitializing

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const isSigningOut = isAuthenticated && !user

      if (isSigningOut) {
        logoutUser()
        setInitializing(false)
        return
      }

      const isSignIn = !isAuthenticated && user
      if (isSignIn) {
        const querySnapshot = await getDocs(
          query(
            collection(db, 'users').withConverter(userConverter),
            where('id', '==', user.uid)
          )
        )

        const userFromFirestore = querySnapshot.docs[0]?.data()
        loginUser(userFromFirestore as any)

        setInitializing(false)
        return
      }

      setInitializing(false)
    })

    return () => unsubscribe()
  }, [isAuthenticated, loginUser, logoutUser])

  if (isInitializing) return <Loading />
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<CategoryDetailsPage />} />
        <Route path='/category/:id' element={<CategoryDetailsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign' element={<SignUp />} />
        <Route path='/explore' element={<ExplorePage />} />
      </Routes>

      <Cart />
    </BrowserRouter>
  )
}

export default App
