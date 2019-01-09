import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'

const defaultProducts = {}

const getProducts = products => ({ type: GET_PRODUCTS, products })

export const fetchProducts = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/stocks')
    dispatch(getProducts(data))
  } catch (error) {
    console.error(error)
  }
}

export const updateProducts = product => async dispatch => {
  try {
    const { data } = await axios.put(`/api/stocks/${product.id}`, product)
    dispatch(getProducts(data))
  } catch (error) {
    console.error(error)
  }
}

export default function (state = defaultProducts, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
