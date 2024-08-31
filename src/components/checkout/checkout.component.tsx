import { FunctionComponent, useContext, useState } from 'react'
import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './checkout.style'
import { CartContext } from '../../contexts/cart-context'
import CustomButtom from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item-component'
import axios from 'axios'
import Loading from '../loading/loading.component'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  const [isLoading, setIsLoading] = useState(false)

  const handleFinishPurchaseClick = async () => {
    try {
      setIsLoading(true)

      const apiUrl = process.env.REACT_APP_API_URL
      if (!apiUrl) {
        throw new Error(
          'A variável de ambiente REACT_APP_API_URL não está definida.'
        )
      }

      const { data } = await axios.post(`${apiUrl}/create-checkout-session`, {
        products
      })

      window.location.href = data.url
    } catch (error) {
      console.error('Erro na requisição:', error)

      alert(
        'Houve um problema ao finalizar a compra. Por favor, tente novamente.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <CheckoutContainer>
        {isLoading && <Loading />}
        <CheckoutTitle>Checkout</CheckoutTitle>

        {products.length > 0 ? (
          <>
            <CheckoutProducts>
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </CheckoutProducts>

            <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>

            <CustomButtom onClick={handleFinishPurchaseClick}>
              Finalizar compra
            </CustomButtom>
          </>
        ) : (
          <p>Seu carrinho está vazio</p>
        )}
      </CheckoutContainer>
    </>
  )
}

export default Checkout
