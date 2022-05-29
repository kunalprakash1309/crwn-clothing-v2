import { useContext } from 'react'
import './cart-dropdown.styles.scss'

import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'


const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )
        }
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown