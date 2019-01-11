import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCTS_BY_CAT = 'GET_PRODUCTS_BY_CAT'
const GET_CATEGORIES = 'GET_CATEGORIES'

const defaultProducts = { products: [], catted: { stocks: [] }, categories: [] }

const getProducts = products => ({ type: GET_PRODUCTS, products })
const getCategories = categories => ({ type: GET_CATEGORIES, categories })
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

export const fetchCategories = () => async dispatch => {
  try {
    const { data } = await axios.get(`/api/categories`)

    dispatch(getCategories(data))
  } catch (error) {
    console.error(error)
  }
}

export const updateProducts = product => async dispatch => {
  try {
    const { data } = await axios.put(`/api/stocks/${product.id}`, product)
  } catch (error) {
    console.error(error)
  }
}
export const createReview = review => async () => {
  try {
    await axios.post(`/api/reviews/`, review)
    fetchProducts()
  } catch (error) {
    console.error(error)
  }
}
export const deleteReview = id => async () => {
  try {
    await axios.delete(`/api/reviews/${id}`)
  } catch (error) {
    console.error(error)
  }
}
export const createProduct = product => async dispatch => {
  try {
    const { data } = await axios.post(`/api/stocks`, product)
    dispatch(getProducts(data))
  } catch (error) {
    console.error(error)
  }
}
export const deleteProduct = stockId => async () => {
  try {
    await axios.delete(`/api/stocks/${stockId}`)
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
    case GET_CATEGORIES:
      return { ...state, categories: action.categories }

    default:
      return state
  }
}
