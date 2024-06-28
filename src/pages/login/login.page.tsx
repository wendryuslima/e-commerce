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

          <LoginSubtitle>Ou entre com seu e-mail</LoginSubtitle>

          <LoginInputConteiner>{/* {emailInput} */}</LoginInputConteiner>
          <LoginInputConteiner>{/* {password input} */}</LoginInputConteiner>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
