import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from '../actions/types.actions'

export default function cartReducer(state, action) {
  let newCart = [...state]

  let existingIndex

  if (action.payload) {
    existingIndex = state.findIndex(
      item => item.variant === action.payload.variant
    )
  }

  const saveData = cart => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  switch (action.type) {
    case ADD_TO_CART:
      if (existingIndex !== -1) {
        let newQuantity

        if (action.payload.fromCart) {
          newQuantity = action.payload.quantity
        } else {
          newQuantity =
            newCart[existingIndex].quantity + action.payload.quantity
        }
        if (newQuantity > action.payload.stock) {
          newQuantity = action.payload.stock
        }
        newCart[existingIndex] = {
          ...newCart[existingIndex],
          quantity: newQuantity,
        }
      } else {
        newCart.push(action.payload)
      }
      saveData(newCart)
      return newCart
    case REMOVE_FROM_CART:
      newCart = newCart.filter(item => item.variant !== action.payload.variant)
      saveData(newCart)
      return newCart
    case CLEAR_CART:
      localStorage.removeItem('cart')
      return []
    default:
      return state
  }
}
