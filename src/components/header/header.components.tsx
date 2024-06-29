import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './header.styles'

const Header = () => {
  const navigate = useNavigate()

  const exploreClick = () => {
    navigate('/explore')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const signUp = () => {
    navigate('/sign')
  }

  const returnClick = () => {
    navigate('/return')
  }
  return (
    <HeaderContainer>
      <HeaderTitle onClick={returnClick}>CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem onClick={exploreClick}>Explorar</HeaderItem>
        <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
        <HeaderItem onClick={signUp}>Criar Conta</HeaderItem>
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
