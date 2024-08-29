import { FunctionComponent, useContext } from 'react'
import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './checkout.style'
import { CartContext } from '../../contexts/cart-context'
import CustomButtom from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item-component'
import { useNavigate } from 'react-router-dom'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>

      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </CheckoutProducts>

          <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>

          <CustomButtom>Finalizar compra</CustomButtom>
        </>
      ) : (
        <p>Seu carrinho está vazio</p>
      )}
    </CheckoutContainer>
  )
}

export default Checkout
