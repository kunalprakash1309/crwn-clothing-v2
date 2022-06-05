import { useDispatch, useSelector } from 'react-redux'

import { toggleCartHidden } from '../../store/cart/cart.actions'
import { selectCartCount } from '../../store/cart/cart.selector'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.jsx'

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount)

  const dispatch = useDispatch()

  const toggleHidden = () => dispatch(toggleCartHidden())
  return (
    <CartIconContainer onClick={toggleHidden}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon