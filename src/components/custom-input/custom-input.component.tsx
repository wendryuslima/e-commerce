import { CustomInputContainer } from './custon-input.style'
import { FunctionComponent, InputHTMLAttributes } from 'react'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}
const CustomInput: FunctionComponent<CustomInputProps> = ({
  hasError,
  ...rest
})    => {
  return <CustomInputContainer hasError={hasError} {...rest}/>
}

export default CustomInput
