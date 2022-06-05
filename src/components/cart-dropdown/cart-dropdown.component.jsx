import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { toggleCartHidden } from '../../store/cart/cart.actions'
import { selectCartItems } from '../../store/cart/cart.selector'

const CartDropdown = () => {
  const navigate = useNavigate()

  const cartItems = useSelector(selectCartItems)

  const dispatch = useDispatch()

  const handleClick = () => { navigate('/checkout'); dispatch(toggleCartHidden())}

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