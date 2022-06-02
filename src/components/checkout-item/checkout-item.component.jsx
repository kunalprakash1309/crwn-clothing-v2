import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { 
  CheckoutItemContainer, 
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton
} from './checkout-item.styles'

const CheckoutItem = ({product}) => {

  const { name, imageUrl, price, quantity} = product

  const {addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)

  const addItemHandler = () => addItemToCart(product)
  const removeItemHandler = () => removeItemFromCart(product)
  const clearItemHandler = () => clearItemFromCart(product)

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem