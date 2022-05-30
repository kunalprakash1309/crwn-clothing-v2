import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import './cart-dropdown.styles.scss'

import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'


const CartDropdown = () => {
  const navigate = useNavigate()
  const { cartItems, setHidden } = useContext(CartContext)

  const handleClick = () => { navigate('/checkout'); setHidden(true)}

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
      <Button onClick={handleClick}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown