import axios from 'axios'
import fetchItems from './cart'
// "OZLEM`S NOTE"
// GET_ITEM means products in the cart

const GET_CART_INFO = 'GET_CART_INFO'

export const getCartIni = cartId => ({
  type: GET_CART_INFO,
  cartId
})

export const getCartInfo = userId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/cart/cartinfo/${userId}`)

    dispatch(getCartIni(data))
  } catch (error) {
    console.error(error)
  }
}

// Reducer
const defaultState = {}

export default function (cartState = defaultState, action) {
  switch (action.type) {
    case GET_CART_INFO:
      return { id: action.cartId }

    default:
      return cartState
  }
}
