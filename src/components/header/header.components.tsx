import React, { useState, useRef, useEffect, useContext } from 'react'
import { signOut } from 'firebase/auth'
import { BsCart3, BsList } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { CiLogin } from 'react-icons/ci'
import { MdAccountCircle } from 'react-icons/md'
import { IoSearchSharp } from 'react-icons/io5'

// Utilities
import { auth } from '../../config/firebase.config'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart-context'

// Styles
import {
  HeaderContainer,
  HeaderTitle,
  HeaderItems,
  HeaderItem,
  Menu,
  Overlay,
  MenuContent,
  CloseButton,
  MenuButton,
  MenuList,
  WebMenu
} from './header.styles'
import CustomButtom from '../custom-button/custom-button.component'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useContext(UserContext)
  const { productsCount, toggleCart } = useContext(CartContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  const handleMenuToggle = () => {
    setIsMenuOpen((menu) => !menu)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  const handleExploreClick = () => {
    navigate('/explore')
  }

  return (
    <>
      <HeaderContainer>
        <HeaderTitle onClick={handleLogoClick}>CLUB CLOTHING</HeaderTitle>

        <WebMenu>
          <HeaderItems>
            <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
            {!isAuthenticated && (
              <>
                <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
                <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
              </>
            )}
            {isAuthenticated && (
              <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
            )}
            <HeaderItem onClick={toggleCart}>
              <BsCart3 size={25} />
              <p style={{ marginLeft: 5 }}>{productsCount}</p>
            </HeaderItem>
          </HeaderItems>
        </WebMenu>

        <MenuButton onClick={handleMenuToggle}>
          <BsList size={25} />
        </MenuButton>
      </HeaderContainer>

      <Overlay isOpen={isMenuOpen} onClick={handleMenuToggle} />
      <Menu ref={menuRef} isOpen={isMenuOpen}>
        <CloseButton onClick={handleMenuToggle}>✖</CloseButton>
        <MenuContent>
          <MenuList>
            <span onClick={handleExploreClick}>
              {' '}
              <IoSearchSharp size={20} />
              Explorar
            </span>
            {!isAuthenticated && (
              <>
                <span onClick={handleLoginClick}>
                  {' '}
                  <CiLogin size={20} />
                  Login
                </span>

                <CustomButtom
                  startIcon={<CiLogin size={20} />}
                  onClick={handleSignUpClick}
                >
                  Criar Conta
                </CustomButtom>
              </>
            )}
            {isAuthenticated && <span onClick={() => signOut(auth)}>Sair</span>}
          </MenuList>
        </MenuContent>
      </Menu>
    </>
  )
}

export default Header
