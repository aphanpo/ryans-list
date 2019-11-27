import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

// action definitions
const GET_CATEGORIES= "rl/GET_CATEGORIES"

// initial state
const initialState = {
  categories: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.payload }
    default:
      return state
  }
}

// action creators
const getCats = () => {
  return dispatch => {
    axios.get('/categories').then(resp => {
      dispatch({
        type: GET_CATEGORIES,
        payload: resp.data
      })
    })
  }
}

// custom hooks
export function useCats() {
  const categories = useSelector(appState => appState.categoryState.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCats())
  }, [dispatch])

  return { categories }
}
