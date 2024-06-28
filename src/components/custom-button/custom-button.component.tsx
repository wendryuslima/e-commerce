import { CustomButtonContainer, IconContainer } from './custom-button.style'
import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode
}

const CustomButtom: FunctionComponent<CustomButtonProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <CustomButtonContainer{... rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  )
}

export default CustomButtom
