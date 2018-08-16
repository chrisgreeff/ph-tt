import { createSelector } from 'reselect'

const getVisibleModalId = ({ modal }) => modal.visibleModalId
const getVisibleModalIdState = createSelector([ getVisibleModalId ], (visibleModalId) => visibleModalId)

const getModalContext = ({ modal }) => modal.context
const getModalContextState = createSelector([ getModalContext ], (context) => context)

export default {
  getVisibleModalIdState,
  getModalContextState,
}
