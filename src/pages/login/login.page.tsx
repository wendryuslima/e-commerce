import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import CustomButtom from '../../components/custom-button/custom-button.component'
import Header from '../../components/header/header.components'

import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputConteiner,
  LoginSubtitle
} from './login.style'
import CustomInput from '../../components/custom-input/custom-input.component'

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButtom startIcon={<BsGoogle size={18} />}>
            Entrar com o google
          </CustomButtom>

          <LoginSubtitle>Ou entre com seu e-mail</LoginSubtitle>

          <LoginInputConteiner>
            <p>E-mail</p>
            <CustomInput type='e-mail' placeholder='Digite seu email' />
          </LoginInputConteiner>

          <LoginInputConteiner>
            <p>Senha</p>
            <CustomInput type='password' placeholder='Digite sua senha' />
          </LoginInputConteiner>

          <CustomButtom startIcon={<FiLogIn size={18}></FiLogIn>}>
            Entrar
          </CustomButtom>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
