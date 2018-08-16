import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import customer from './customer'
import customerNote from './customer-note'
import modal from './modal'

const rootReducer = combineReducers({
  customer,
  customerNote,
  modal,
  routing: routerReducer
})

export default rootReducer
