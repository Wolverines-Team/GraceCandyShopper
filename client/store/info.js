import axios from 'axios'
import fetchItems from './cart'
// "OZLEM`S NOTE"
// GET_ITEM means products in the cart

const GET_CART_INFO = 'GET_CART_INFO'
const GET_ORDER = 'GET_ORDER'

export const getCartIni = cartId => ({
  type: GET_CART_INFO,
  cartId
})
export const getOrder = status => ({
  type: GET_ORDER,
  status
})

export const getCartInfo = userId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/cart/cartinfo/${userId}`)

    dispatch(getCartIni(data))
  } catch (error) {
    console.error(error)
  }
}
export const makeOrder = order => async dispatch => {
  try {
    const { data } = await axios.post(`/api/charge/`, order)

    dispatch(getOrder(data))
  } catch (error) {
    console.error(error)
  }
}

// Reducer
const defaultState = {}

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_CART_INFO:
      return { ...state, id: action.cartId }
    case GET_ORDER:
      return { ...state, status: action.status }

    default:
      return state
  }
}
