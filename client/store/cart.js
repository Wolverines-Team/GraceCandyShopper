import axios from 'axios';

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

export const addItem = newItem => ({
  type: ADD_ITEM,
  newItem
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
export const fetchItems = () => async dispatch => {
  try {
    const { data } = await axios.post('api/cart');
    dispatch(getItem(data));
  } catch (error) {
    console.log(error);
  }
};

// OZLEM`S COMMENT
//!!! IMPORTANT NOTE: WE WILL GOING TO ADD NEW ITEMS/PRODUCTS TO THE CART
//I AM NOT SURE ABOUT THE NAME , IN DB NAME IS STOCK ID, HOWEVER I AM USING IN HERE 'item.id'

export const postItems = newItem => async dispatch => {
  try {
    const { data } = await axios.post(`/api/cart/${newItem.cartId}`, newItem);
    dispatch(addItem(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteItems = itemId => async dispatch => {
  await axios.delete(`api/cart/${itemId}`);
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
      return [...cartState, action.newItem];
    case REMOVE_ITEM:
      return cartState.filter(item => item.id !== action.itemId);
    case UPDATE_QUANTITY:
      return cartState.map(item => {
        if (item.stockId === action.item.stockId) {
          return { ...item, ...action.item };
        } else {
          return item;
        }
      });
    default:
      return cartState;
  }
}
