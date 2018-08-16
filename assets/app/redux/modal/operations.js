import actions from './actions'

/**
 * Sets the visible modal id.
 *
 * @method set
 * @param  {String} visibleModalId
 *         The id of the modal to show.
 */
const set = actions.set

/**
 * Sets the modal context.
 *
 * @method setContext
 * @param  {Any} context
 *         The context to set.
 */
const setContext = actions.setContext

/**
 * Shows the modal with the passed visible modal id.
 *
 * @method showModal
 * @param  {String} visibleModalId
 *         The id of the modal to show.
 */
const showModal = (visibleModalId) => (dispatch) => {
  dispatch(set(visibleModalId))

  return Promise.resolve()
}

/**
 * Hides all modals.
 *
 * @method hideModal
 */
const hideModal = () => (dispatch) => {
  dispatch(set(null))

  return Promise.resolve()
}

/**
 * Sets the modal context.
 *
 * @method setModalContext
 */
const setModalContext = (context) => (dispatch) => {
  dispatch(setContext(context))

  return Promise.resolve()
}

/**
 * Clears the modal context.
 *
 * @method clearModalContext
 */
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
