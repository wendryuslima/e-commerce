import {BsGoogle} from 'react-icons/bs'
import {FiLogIn} from 'react-icons/fi'
import CustomButtom from '../../components/custom-button/custom-button.component'
import Header from '../../components/header/header.components'

import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputConteiner,
  LoginSubtitle
} from './login.style'

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButtom startIcon={<BsGoogle size={18}/>}>Entrar com o google</CustomButtom >

          <LoginSubtitle>Ou entre com seu e-mail</LoginSubtitle>

          <LoginInputConteiner>{/* {emailInput} */}</LoginInputConteiner>
          <LoginInputConteiner>{/* {password input} */}</LoginInputConteiner>

          <CustomButtom startIcon={<FiLogIn size={18}></FiLogIn>}>Entrar</CustomButtom>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
