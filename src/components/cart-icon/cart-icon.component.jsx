import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.jsx'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.jsx'

const CartIcon = () => {
  const {hidden, toggleHidden, cartCount} = useContext(CartContext)
  // const toggleisCartOpen = () => setHidden(!hidden)
  return (
    <CartIconContainer>
      <ShoppingIcon className='shopping-icon' onClick={toggleHidden}/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon