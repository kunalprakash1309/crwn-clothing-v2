import { useSelector } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'


const CheckoutPage = () => {

  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
          <span>Quantity</span>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} product={cartItem} />
      ))}
      <Total className='total'>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}

export default CheckoutPage