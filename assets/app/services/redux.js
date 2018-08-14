import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { customerOperations, customerSelectors } from 'redux/customer'

class ReduxService {
  connectPage (Class) {
    const mapStateToProps = (state) => ({
      customer: customerSelectors.getCustomerState(state),
      customers: customerSelectors.getCustomersState(state),
    })

    const mapDispachToProps = (dispatch) => bindActionCreators({
      ...customerOperations,
    }, dispatch)

    return withRouter(connect(mapStateToProps, mapDispachToProps)(Class))
  }
}

export default new ReduxService()
