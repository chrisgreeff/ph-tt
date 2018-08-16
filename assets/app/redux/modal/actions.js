import types from './types'

const set = (visibleModalId) => ({
  type: types.SET,
  visibleModalId
})

const setContext = (context) => ({
  type: types.SET_CONTEXT,
  context
})

export default {
  set,
  setContext
}
