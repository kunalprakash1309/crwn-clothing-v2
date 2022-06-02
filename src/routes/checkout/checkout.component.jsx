import { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CartContext } from '../../contexts/cart.context'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'


const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

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