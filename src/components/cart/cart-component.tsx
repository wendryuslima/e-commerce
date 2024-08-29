import { FunctionComponent, useContext } from 'react'
import {
  CartContainer,
  CartTitle,
  CartTotal,
  CartEscapeArea,
  CartContent,
  EmptyCart
} from './cart-styles'
import CustomButtom from '../custom-button/custom-button.component'
import { BsCartCheck } from 'react-icons/bs'
import { CartContext } from '../../contexts/cart-context'
import CartItem from '../cart-item/cart-item-component'
import { useNavigate } from 'react-router-dom'
const Cart: FunctionComponent = () => {
  const { isVisible, products, productsCount, productsTotalPrice, toggleCart } =
    useContext(CartContext)

  const navigate = useNavigate()

  const handleCheckoutClick = () => {
    navigate('/checkout')
    toggleCart()
  }

  if (!products) {
    return <h1>Seu carrinho está vazio</h1>
  }
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />

      <CartContent>
        {productsCount === 0 && <EmptyCart>Seu carrinho está vazioa</EmptyCart>}
        {productsCount > 0 && <CartTitle>Seu carrinho</CartTitle>}
        {/* {Produtos} */}
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        {productsCount > 0 && (
          <CartTotal>Total: R${productsTotalPrice}</CartTotal>
        )}
        {productsCount > 0 && (
          <CustomButtom
            onClick={handleCheckoutClick}
            startIcon={<BsCartCheck />}
          >
            Ir para o checkout
          </CustomButtom>
        )}
      </CartContent>
    </CartContainer>
  )
}

export default Cart
