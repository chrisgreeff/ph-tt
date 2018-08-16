import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { customerOperations, customerSelectors } from 'redux/customer'
import { customerNoteOperations, customerNoteSelectors } from 'redux/customer-note'
import { modalOperations, modalSelectors } from 'redux/modal'

class ReduxService {
  connect (Class) {
    const mapStateToProps = (state) => ({
      customer: customerSelectors.getCustomerState(state),
      customers: customerSelectors.getCustomersState(state),
      customerNode: customerNoteSelectors.getCustomerNoteState(state),
      modalContext: modalSelectors.getModalContextState(state),
    })

    const mapDispachToProps = (dispatch) => bindActionCreators({
      ...customerOperations,
      ...customerNoteOperations,
      ...modalOperations,
    }, dispatch)

    return withRouter(connect(mapStateToProps, mapDispachToProps)(Class))
  }
}

export default new ReduxService()
