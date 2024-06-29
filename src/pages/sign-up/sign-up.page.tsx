import CustomButtom from '../../components/custom-button/custom-button.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/header/header.components'
import { useForm } from 'react-hook-form'
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './sign-up.style'
import { FiLogIn } from 'react-icons/fi'
import { InputErrorMessageContainer } from '../../components/input-error-message/input-error-message.style'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const handleSubmitPress = (data: any) => {
    console.log({ data })
  }

  const wacthPassword = watch('password')
  return (
    <>
      <Header />

      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua conta</SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors?.name}
              {...register('name', {
                required: true
              })}
              placeholder='Digite seu nome'
            ></CustomInput>

            {errors?.name?.type === 'required' && (
              <InputErrorMessageContainer>
                Digite seu nome
              </InputErrorMessageContainer>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={!!errors?.lastName}
              {...register('lastName', { required: true })}
              placeholder='Digite seu sobrenome'
            ></CustomInput>

            {errors?.lastName?.type === 'required' && (
              <InputErrorMessageContainer>
                Digite seu sobrenome
              </InputErrorMessageContainer>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Email</p>
            <CustomInput
              hasError={!!errors?.email}
              {...register('email', { required: true })}
              placeholder='Digite seu email'
            ></CustomInput>

            {errors?.email?.type === 'required' && (
              <InputErrorMessageContainer>
                Digite seu email
              </InputErrorMessageContainer>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors.password}
              {...register('password', { required: true })}
              type='password'
              placeholder='Digite sua senha'
            ></CustomInput>

            {errors?.password?.type === 'required' && (
              <InputErrorMessageContainer>
                Digite sua senha
              </InputErrorMessageContainer>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirme a senha</p>
            <CustomInput
              hasError={!!errors.passwordConfirmed}
              {...register('passwordConfirmed', {
                required: true,
                validate: (value) => {
                  return value === wacthPassword
                }
              })}
              type='password'
              placeholder='Confirme sua senha'
            ></CustomInput>

            {errors?.passwordConfirmed?.type === 'required' && (
              <InputErrorMessageContainer>
                Confirme sua senha
              </InputErrorMessageContainer>
            )}

            {errors?.passwordConfirmed?.type === 'validate' && (
              <InputErrorMessageContainer>
                As senhas não coincidem
              </InputErrorMessageContainer>
            )}
          </SignUpInputContainer>

          <CustomButtom
            onClick={() => handleSubmit(handleSubmitPress)()}
            startIcon={<FiLogIn size={18} />}
          >
            Criar conta
          </CustomButtom>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}

export default SignUp
