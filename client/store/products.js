import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCTS_BY_CAT = 'GET_PRODUCTS_BY_CAT'

const defaultProducts = { products: [], catted: { stocks: [] } }

const getProducts = products => ({ type: GET_PRODUCTS, products })
const getProductsByCat = products => ({ type: GET_PRODUCTS_BY_CAT, products })

export const fetchProducts = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/stocks')
    dispatch(getProducts(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchProductsByCategory = catId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/categories/${catId}`)

    dispatch(getProductsByCat(data))
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
      return { ...state, products: action.products }
    case GET_PRODUCTS_BY_CAT:
      return { ...state, catted: action.products }

    default:
      return state
  }
}
