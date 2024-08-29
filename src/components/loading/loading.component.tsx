import { FunctionComponent } from 'react'
import SyncLoader from 'react-spinners/SyncLoader'
import { LoadingContainer } from './loading.styles'

interface loadingProps {
  message?: string
}
const Loading: FunctionComponent<loadingProps> = ({ message }) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <SyncLoader size={30} />
    </LoadingContainer>
  )
}

export default Loading
