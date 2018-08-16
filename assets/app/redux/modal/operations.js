import actions from './actions'

const set = actions.set

const setContext = actions.setContext

const showModal = (visibleModalId) => (dispatch) => {
  dispatch(set(visibleModalId))

  return Promise.resolve()
}

const hideModal = () => (dispatch) => {
  dispatch(set(null))

  return Promise.resolve()
}

const setModalContext = (context) => (dispatch) => {
  dispatch(setContext(context))

  return Promise.resolve()
}

const clearModalContext = () => (dispatch) => {
  dispatch(setContext({}))

  return Promise.resolve()
}

export default {
  showModal,
  hideModal,
  setModalContext,
  clearModalContext,
}
