import types from './types'

const initialState = {
  visibleModalId: null,
  context: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
  case types.SET:
    return {
      ...state,
      visibleModalId: action.visibleModalId
    }
  case types.SET_CONTEXT:
    return {
      ...state,
      context: action.context
    }
  default:
    return state
  }
}
