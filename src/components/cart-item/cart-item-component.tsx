import { FunctionComponent, useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cart-item-style'
import CartProduct from '../../types/cart.types'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'

interface CartItemProps {
  product: CartProduct
}
const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const {
    products,
    removeProductFromCart,
    increaseProductQuantity,
    decreasseProductQuantity
  } = useContext(CartContext)

  const handleRemoveClick = () => {
    removeProductFromCart(product.id)
  }

  const handleIncreaseCLick = () => {
    increaseProductQuantity(product.id)
  }

  const handleDecreaseClick = () => {
    decreasseProductQuantity(product.id)
  }
  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus onClick={handleIncreaseCLick} size={20} />
          <p>{product.quantity}</p>
          <AiOutlinePlus onClick={handleDecreaseClick} size={20} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemoveClick}>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
