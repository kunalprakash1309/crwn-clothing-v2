import { createContext, useReducer } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )

  if(existingCartItem) {
    return cartItems.map((cartItem) => 
      cartItem.id === productToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    )
  }

  return [...cartItems, {...productToAdd, quantity: 1}]
}

export const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  )

  if(existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
  }

  if(existingCartItem.quantity > 1) {
    return cartItems.map((cartItem) => 
      cartItem.id === productToRemove.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
    )
  }
}

export const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id)
}

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_COUNT: 'SET_CART_COUNT',
  SET_CART_TOTAL: 'SET_CART_TOTAL',
};

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

export const cartReducer = (state, action) => {
  const {type, payload} = action

  switch(type) {
    case(CART_ACTION_TYPES.TOGGLE_CART_HIDDEN):
      return {
        ...state,
        hidden: !state.hidden
      }

    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
}

export const CartProvider = ({children}) => {

  const [{hidden, cartItems, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE)

  const toggleHidden = () => {
    dispatch({
      type: CART_ACTION_TYPES.TOGGLE_CART_HIDDEN
    })
  }

  const updateCartItemsReducer = (cartItems) => {

    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    const payload = {
      cartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    }

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: payload
    })
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };
    

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    hidden, 
    toggleHidden, 
    cartItems, 
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount, 
    cartTotal
  }
  
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}