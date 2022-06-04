import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.jsx'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.jsx'

const CartIcon = () => {
  const {toggleHidden, cartCount} = useContext(CartContext)
  // const toggleisCartOpen = () => setHidden(!hidden)
  return (
    <CartIconContainer onClick={toggleHidden}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon