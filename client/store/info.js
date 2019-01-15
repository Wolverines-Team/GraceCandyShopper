import axios from 'axios'
import fetchItems from './cart'
// "OZLEM`S NOTE"
// GET_ITEM means products in the cart

const GET_CART_INFO = 'GET_CART_INFO'
const GET_ORDER = 'GET_ORDER'
const SET_ADDRESS = 'SET_ADDRESS'

export const getCartIni = cartId => ({
  type: GET_CART_INFO,
  cartId
})
export const getOrder = status => ({
  type: GET_ORDER,
  status
})

export const setAddress = address => ({
  type: SET_ADDRESS,
  address
})

export const getCartInfo = userId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/cart/cartinfo/${userId}`)

    dispatch(getCartIni(data))
  } catch (error) {
    console.error(error)
  }
}
export const makeOrder = (cartId, address) => async dispatch => {
  try {
    console.log(address)
    const { data } = await axios.post(`/api/cart/checkout/${cartId}`, address)
    dispatch(getOrder(data))
  } catch (error) {
    console.error(error)
  }
}
export const addAddress = (userId, address) => async dispatch => {
  try {
    const { data } = await axios.post(`/api/users/address/${userId}`, address)
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
    case SET_ADDRESS:
      return { ...state, address: action.address }
    default:
      return state
  }
}
