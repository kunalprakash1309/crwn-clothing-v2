import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.actions'

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'

import { Footer, Name, Price, ProductCartContainer } from './product-card.styles'

const ProductCard = ({product}) => {
  const { name, price, imageUrl } = product

  const dispatch = useDispatch()

  const addProductToCart = () => dispatch(addItemToCart(product))
  
  return(
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductCartContainer>
  )
}

export default ProductCard