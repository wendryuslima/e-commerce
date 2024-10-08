import { FunctionComponent, useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/user.context'
import { useNavigate } from 'react-router-dom'
import Header from '../header/header.components'
import Loading from '../loading/loading.component'

const AuthenticationGuard: FunctionComponent = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading message='Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em instantes...' />
      </>
    )
  }

  return <>{children}</>
}

export default AuthenticationGuard
