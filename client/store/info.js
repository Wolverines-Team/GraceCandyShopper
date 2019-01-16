<<<<<<< HEAD
import axios from 'axios'
import fetchItems from './cart'
// "OZLEM`S NOTE"
// GET_ITEM means products in the cart

const GET_CART_INFO = 'GET_CART_INFO'
const GET_ORDER = 'GET_ORDER'
const SET_ADDRESS = 'SET_ADDRESS'
const GET_ADDRESSES = 'GET_ADDRESSES'
const GET_USERS = 'GET_USERS'
const GET_HISTORY = 'GET_HISTORY'
=======
import axios from 'axios';
import fetchItems from './cart';
// "OZLEM`S NOTE"
// GET_ITEM means products in the cart

const GET_CART_INFO = 'GET_CART_INFO';
const GET_ORDER = 'GET_ORDER';
const SET_ADDRESS = 'SET_ADDRESS';
const GET_ADDRESSES = 'GET_ADDRESSES';
const GET_USERS = 'GET_USERS';
>>>>>>> 0b1bace5a617768ec69b73fef8bbb7ee5fe6e614

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
export const getAddresses = addresses => ({
  type: GET_ADDRESSES,
  addresses
})
export const getUsers = users => ({
  type: GET_USERS,
  users
})
export const getHistory = history => ({
  type: GET_HISTORY,
  history
})

export const getCartInfo = userId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/cart/cartinfo/${userId}`)

    dispatch(getCartIni(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchAddresses = userId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/users/${userId}`)

    dispatch(getAddresses(data))
  } catch (error) {
    console.error(error)
  }
}
export const fetchUsers = () => async dispatch => {
  try {
    const { data } = await axios.get(`/api/users`)

    dispatch(getUsers(data))
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

export const newCart = userId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/cart/cartinfo/${userId}`, userId)
    dispatch(getCartIni(data))
  } catch (error) {
    console.error(error)
  }
}
export const makeAdmin = userId => async () => {
  try {
    await axios.put(`/api/users/makeAdmin/${userId}`, { isAdmin: true })
  } catch (error) {
    console.error(error)
  }
}
export const takeAdmin = userId => async () => {
  try {
    await axios.put(`/api/users/makeAdmin/${userId}`, { isAdmin: false })
  } catch (error) {
    console.error(error)
  }
}
export const sendEmail = email => async () => {
  try {
    await axios.post(`/api/cart/sendemail`, { email })
    console.log(email)
  } catch (error) {
    console.error(error)
  }
}
export const fetchHistory = userId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/cart/history/${userId}`)

    dispatch(getHistory(data))
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
    case GET_ADDRESSES:
      return { ...state, addresses: action.addresses }
    case GET_USERS:
      return { ...state, users: action.users }
    case GET_HISTORY:
      return { ...state, history: action.history }
    default:
      return state
  }
}
