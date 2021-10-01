import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import userReducer, {
  restoreUsersAction,
  // , getUsers
} from './userDuck'

import thunk from 'redux-thunk'

let rootReducer = combineReducers({
  user: userReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function generateStore() {
  let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
  restoreUsersAction()(store.dispatch, store.getState)
  return store
}
