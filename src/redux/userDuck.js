import axios from 'axios'
import { URL_API } from '../services'
//constantes
let initialState = {
  fetching: false,
  error: '',
  data: [],
}

const GET_USERS = 'GET_USERS'
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
const GET_USERS_ERROR = 'GET_USERS_ERRORS'
const RESET_USERS = 'RESET_USERS'

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        fetching: true,
      }
    case GET_USERS_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload.error,
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload.data,
      }
    case RESET_USERS:
      return { ...initialState }
    default:
      return state
  }
}

export let getUsers = () => (dispatch, getState) => {
  dispatch({
    type: GET_USERS,
  })

  axios
    .get(URL_API, {
      crossdomain: true,
    })
    .then((res) => {
      console.log(res.data.data)
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: {
          data: res.data.data,
        },
      })
      saveStorage(getState())
    })
    .catch((error) => {
      console.log('referentes', error)
      dispatch({
        type: GET_USERS_ERROR,
        payload: {
          error: error.response,
        },
      })
    })
}
export let resetUsers = () => (dispatch) => {
  dispatch({
    type: RESET_USERS,
  })
  localStorage.removeItem('storage')
}

function saveStorage(storage) {
  localStorage.storage = JSON.stringify(storage)
}

export let restoreUsersAction = () => (dispatch, getState) => {
  let storage = localStorage.getItem('storage')
  storage = JSON.parse(storage)
  if (storage) {
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: {
        data: storage.user.data,
      },
    })
  }
}
