import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'

import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.scss'

const CartIcon = () => {
  const {hidden, setHidden, cartCount} = useContext(CartContext)
  const toggleisCartOpen = () => setHidden(!hidden)
  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' onClick={toggleisCartOpen}/>
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon