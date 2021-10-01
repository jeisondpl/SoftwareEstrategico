import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import generateStore from './redux/store'
import Routes from './routes'
let store = generateStore()

let WithStore = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

ReactDOM.render(<WithStore />, document.getElementById('root'))
