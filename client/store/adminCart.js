import axios from 'axios';

//OZLEM`S NOTE: THIS STORE IS ONLY FOR ADMIN_CART,IF I PUT THIS IN CART`S STORE, GET ITEM CHANGES THE STORE...

const ADMIN_CART = 'ADMIN_CART';

export const adminCart = carts => ({
  type: ADMIN_CART,
  carts
});

export const checkedOutCart = () => async dispatch => {
  try {
    const { data } = await axios.get(`/api/cart/coitems/admin`);
    //console.log('is this checkedout items ===>', data);
    dispatch(adminCart(data));
  } catch (error) {
    console.log(error);
  }
};

const defaultState = [];
export default function(adminCartState = defaultState, action) {
  switch (action.type) {
    case ADMIN_CART:
      return action.carts;
    default:
      return adminCartState;
  }
}
