import CART_ACTION_TYPES from "./cart.types";

export const toggleCartHidden = () => ({
  type: CART_ACTION_TYPES.TOGGLE_CART_HIDDEN,
})

export const addItemToCart = (product) => ({
  type: CART_ACTION_TYPES.ADD_ITEM_TO_CART,
  payload: product
})

export const removeItemFromCart = (product) => ({
  type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART,
  payload: product
})

export const clearItemFromCart = (product) => ({
  type: CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART,
  payload: product
})

export const clearAllItemFromCart = () => ({
  type: CART_ACTION_TYPES.CLEAR_ALL_ITEM_FROM_CART
})