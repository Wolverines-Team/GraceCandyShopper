import axios from 'axios';

//"OZLEM`S NOTE"
//GET_ITEM means products in the cart

//action types
const GET_ITEM = 'GET_ITEM';
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

//action creator
export const getItem = items => ({
  type: GET_ITEM,
  items
});

export const addItem = item => ({
  type: ADD_ITEM,
  item
});

export const removeItem = itemId => ({
  type: REMOVE_ITEM,
  itemId
});

export const updateQuantity = item => ({
  type: UPDATE_QUANTITY,
  item
});

//thunk creators
export const fetchItems = cartId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/cart/${cartId}`);
    console.log('cart is looking like ===>', data);
    dispatch(getItem(data));
  } catch (error) {
    console.log(error);
  }
};

// OZLEM`S COMMENT
//!!! IMPORTANT NOTE: WE WILL GOING TO ADD NEW ITEMS/PRODUCTS TO THE CART
//I AM NOT SURE ABOUT THE NAME , IN DB NAME IS STOCK ID, HOWEVER I AM USING IN HERE 'item.id'

export const postItems = (cartId, item) => async dispatch => {
  try {
    console.log('what is our item ===>', item);
    const { data } = await axios.post(`/api/cart/${cartId}`, item);
    dispatch(addItem(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteItems = itemId => async dispatch => {
  await axios.delete(`/api/cart/${itemId}`);
  dispatch(removeItem(itemId));
};

// OZLEM`S COMMENTS
// I AM NOT SURE ABOUT HOW CAN I CHANGE THE QUANTITY , IS IT OKAY `item.quantity`???

export const updateItemQuantity = item => async dispatch => {
  try {
    const { data } = await axios.put(`/api/cart/${item.id}`, item.quantity);
    dispatch(updateQuantity(data));
  } catch (error) {
    console.error(error);
  }
};

// Reducer
const defaultState = [];

export default function(cartState = defaultState, action) {
  switch (action.type) {
    case GET_ITEM:
      return action.items;
    case ADD_ITEM:
      return [...cartState, action.item];
    case REMOVE_ITEM:
      console.log('are you hitting there??====>');
      return cartState.filter(item => item.id !== action.itemId);
    case UPDATE_QUANTITY:
      return cartState.map(item => {
        if (item.id === action.item.id) {
          return { ...item, ...action.item };
        } else {
          return item;
        }
      });
    default:
      return cartState;
  }
}
