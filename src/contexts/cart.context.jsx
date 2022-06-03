import { createContext, useEffect, useReducer, useState } from "react";

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
  clearItemFromCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

export const CART_ACTION_TYPES = {
  TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN"
}

const INITIAL_STATE = {
  hidden: true
}

export const cartReducer = (state, action) => {
  const {type, payload} = action

  switch(type) {
    case(CART_ACTION_TYPES.TOGGLE_CART_HIDDEN):
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}

export const CartProvider = ({children}) => {
  // const [hidden, setHidden] = useState(true)
  const [{hidden}, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  const toggleHidden = () => {
    dispatch({
      type: CART_ACTION_TYPES.TOGGLE_CART_HIDDEN
    })
  }

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = (product) => 
    setCartItems(addCartItem(cartItems, product))

  const removeItemFromCart = (product) => 
    setCartItems(removeCartItem(cartItems, product))
  
  const clearItemFromCart = (product) => {
    setCartItems(clearCartItem(cartItems, product))
  }

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