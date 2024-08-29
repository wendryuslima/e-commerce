import { FunctionComponent, useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/user.context'
import { useNavigate } from 'react-router-dom'
import Header from '../header/header.components'
import Loading from '../loading/loading.component'

const Authentication: FunctionComponent = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext)

  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      if (!isAuthenticated) {
        navigate('/login')
      }
    }, 3000)
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading message='Para acessar essa página, é necessário estar logado. Você será redirecionado para página de login em instantes...' />
      </>
    )
  }
  return <>{children}</>
}

export default Authentication
