import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles'

import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'


const CartDropdown = () => {
  const navigate = useNavigate()
  const { cartItems, setHidden } = useContext(CartContext)

  const handleClick = () => { navigate('/checkout'); setHidden(true)}

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
      </CartItems>
      <Button onClick={handleClick}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown