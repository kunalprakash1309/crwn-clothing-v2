import CART_ACTION_TYPES from "./cart.types";
import { addCartItem, clearCartItem, removeCartItem } from "./cart.utils";

const INITIAL_STATE = {
  cartHidden: true,
  cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action={}) => {
  const { type, payload } = action

  switch(type) {
    case CART_ACTION_TYPES.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        cartHidden: !state.cartHidden
      }

    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, payload)
      }
    
    case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, payload)
      }
    
    case CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearCartItem(state.cartItems, payload)
      }
    
    case CART_ACTION_TYPES.CLEAR_ALL_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: []
      }

    default:
      return state
  }
}

export default cartReducer