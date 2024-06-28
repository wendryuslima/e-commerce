import { FunctionComponent } from "react"
import { InputErrorMessageContainer } from "./input-error-message.style"

const inputErrorMessage: FunctionComponent = ({children}) => {

    return (
        <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
    )

}

export default inputErrorMessage