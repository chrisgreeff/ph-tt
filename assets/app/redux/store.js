import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from 'redux/reducers'
import thunk from 'redux-thunk'

export const history = createBrowserHistory()

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, routerMiddleware(history))
)

export default store
