import { FunctionComponent, useContext } from 'react'
import {
  CartContainer,
  CartTitle,
  CartTotal,
  CartEscapeArea,
  CartContent
} from './cart-styles'
import CustomButtom from '../custom-button/custom-button.component'
import { BsCartCheck } from 'react-icons/bs'
import { CartContext } from '../../contexts/cart-context'
import CartItem from '../cart-item/cart-item-component'
const Cart: FunctionComponent = () => {
  const { isVisible, products, toggleCart, productsTotalPrice } =
    useContext(CartContext)
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu carrinho</CartTitle>
        {/* {Produtos} */}
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <CartTotal>Total: R${productsTotalPrice}</CartTotal>
        <CustomButtom startIcon={<BsCartCheck />}>
          Ir para o checkout
        </CustomButtom>
      </CartContent>
    </CartContainer>
  )
}

export default Cart
