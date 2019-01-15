<<<<<<< HEAD
import axios from 'axios';
import fetchItems from './cart';
// "OZLEM`S NOTE"
// GET_ITEM means products in the cart

const GET_CART_INFO = 'GET_CART_INFO';
const GET_ORDER = 'GET_ORDER';
const SET_ADDRESS = 'SET_ADDRESS';
const GET_ADDRESSES = 'GET_ADDRESSES';
=======
import axios from "axios";
import fetchItems from "./cart";
// "OZLEM`S NOTE"
// GET_ITEM means products in the cart

const GET_CART_INFO = "GET_CART_INFO";
const GET_ORDER = "GET_ORDER";
const SET_ADDRESS = "SET_ADDRESS";
const GET_ADDRESSES = "GET_ADDRESSES";
const GET_USERS = "GET_USERS";
>>>>>>> categories

export const getCartIni = cartId => ({
  type: GET_CART_INFO,
  cartId
});
export const getOrder = status => ({
  type: GET_ORDER,
  status
});

export const setAddress = address => ({
  type: SET_ADDRESS,
  address
});
export const getAddresses = addresses => ({
  type: GET_ADDRESSES,
  addresses
});
<<<<<<< HEAD
=======
export const getUsers = users => ({
  type: GET_USERS,
  users
});
>>>>>>> categories

export const getCartInfo = userId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/cart/cartinfo/${userId}`);

    dispatch(getCartIni(data));
  } catch (error) {
    console.error(error);
  }
};

export const fetchAddresses = userId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/users/${userId}`);

    dispatch(getAddresses(data));
  } catch (error) {
    console.error(error);
  }
};
<<<<<<< HEAD
=======
export const fetchUsers = () => async dispatch => {
  try {
    const { data } = await axios.get(`/api/users`);

    dispatch(getUsers(data));
  } catch (error) {
    console.error(error);
  }
};
>>>>>>> categories

export const makeOrder = (cartId, address) => async dispatch => {
  try {
    console.log(address);
    const { data } = await axios.post(`/api/cart/checkout/${cartId}`, address);
    dispatch(getOrder(data));
  } catch (error) {
    console.error(error);
  }
};
export const addAddress = (userId, address) => async dispatch => {
  try {
    const { data } = await axios.post(`/api/users/address/${userId}`, address);
    dispatch(getOrder(data));
  } catch (error) {
    console.error(error);
  }
};

export const newCart = userId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/cart/cartinfo/${userId}`, userId);
    dispatch(getCartIni(data));
  } catch (error) {
    console.error(error);
  }
};
<<<<<<< HEAD
=======
export const makeAdmin = userId => async () => {
  try {
    await axios.put(`/api/users/makeAdmin/${userId}`, { isAdmin: true });
  } catch (error) {
    console.error(error);
  }
};
export const takeAdmin = userId => async () => {
  try {
    await axios.put(`/api/users/makeAdmin/${userId}`, { isAdmin: false });
  } catch (error) {
    console.error(error);
  }
};
>>>>>>> categories

// Reducer
const defaultState = {};

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_CART_INFO:
      return { ...state, id: action.cartId };
    case GET_ORDER:
      return { ...state, status: action.status };
    case SET_ADDRESS:
      return { ...state, address: action.address };
    case GET_ADDRESSES:
      return { ...state, addresses: action.addresses };
<<<<<<< HEAD
=======
    case GET_USERS:
      return { ...state, users: action.users };
>>>>>>> categories
    default:
      return state;
  }
}
