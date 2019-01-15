import axios from 'axios';

//Ozlem`s note:
//This store`s only duty is chenging and seeing the current shipping status of ordered (adminCart) items

const UPDATE_STATUS = 'UPDATE_STATUS';

export const updateStatus = status => ({
  type: UPDATE_STATUS,
  status
});

//api/order/:orderId

export const updatedStatus = (orderStatus, orderId) => async dispatch => {
  try {
    const { data } = await axios.put(`api/order/${orderId}`, orderStatus);
    dispatch(updateStatus(data));
  } catch (error) {
    console.log(error);
  }
};

const defaultState = {};

export default function(orderState = defaultState, action) {
  switch (action.type) {
    case UPDATE_STATUS:
      return { ...orderState, order_status: action.status };
    default:
      return orderState;
  }
}
