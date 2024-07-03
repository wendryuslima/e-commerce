import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './header.styles'
import { auth } from '../../config/firebase.config'
import { signOut } from 'firebase/auth'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'

const Header = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }

  const signUp = () => {
    navigate('/sign')
  }

  const returnClick = () => {
    navigate('/return')
  }

  const { isAuthenticated } = useContext(UserContext)

  return (
    <HeaderContainer>
      <HeaderTitle onClick={returnClick}>CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={signUp}>Criar Conta</HeaderItem>
          </>
        )}
        {isAuthenticated && (
          <>
            <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
          </>
        )}
        <HeaderItem>
          {' '}
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
