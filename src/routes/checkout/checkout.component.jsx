import { useSelector } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import PaymentForm from '../../components/payment-form/payment-form.component'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, TestDataContainer, Total } from './checkout.styles'


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
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
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

      <TestDataContainer>
        <h3>Card Number : 4242 4242 4242 4242</h3>
        <h3>Expiry Date: Any future date</h3>
      </TestDataContainer> 
      <PaymentForm />
    </CheckoutContainer>
  )
}

export default CheckoutPage