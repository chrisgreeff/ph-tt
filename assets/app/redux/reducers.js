import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import customer from './customer'

const rootReducer = combineReducers({
  customer,
  routing: routerReducer
})

export default rootReducer
