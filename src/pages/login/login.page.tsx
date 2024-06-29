import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import CustomButtom from '../../components/custom-button/custom-button.component'
import Header from '../../components/header/header.components'
import { useForm } from 'react-hook-form'
import validator from 'validator'

import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputConteiner,
  LoginSubtitle
} from './login.style'
import CustomInput from '../../components/custom-input/custom-input.component'
import { InputErrorMessageContainer } from '../../components/input-error-message/input-error-message.style'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const handleSubmitPress = (data: any) => {
    console.log({ data })
  }
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
            <CustomInput
              hasError={!!errors?.email}
              placeholder='Digite seu email'
                {...register('email', {
                  required: true,
                  validate: (value) => {
                    return validator.isEmail(value)
                  }
                })}
            />

            {errors?.email?.type === 'required' && (
              <InputErrorMessageContainer>
                O email é obrigatório
              </InputErrorMessageContainer>
            )}

           
          </LoginInputConteiner>

          <LoginInputConteiner>
            <p>Senha</p>
            <CustomInput
              type='password'
              hasError={!!errors?.password}
              placeholder='Digite sua password'
              {...register('password', { required: true })}
            />

            {errors?.password?.type === 'required' && (
              <InputErrorMessageContainer>
                A senha é obrigatória.
              </InputErrorMessageContainer>
            )}
          </LoginInputConteiner>

          <CustomButtom
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Entrar
          </CustomButtom>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
