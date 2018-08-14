import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import member from './member'

const rootReducer = combineReducers({
  member,
  routing: routerReducer
})

export default rootReducer
