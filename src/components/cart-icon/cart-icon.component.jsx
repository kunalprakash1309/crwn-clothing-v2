
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({toggleHidden}) => {
  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' onClick={toggleHidden}/>
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon