import './modal.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { modalOperations, modalSelectors } from 'redux/modal'

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    hideModal: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    saving: PropTypes.any,
    visibleModalId: PropTypes.string,
  }

  componentDidMount () {
    document.addEventListener('click', this.onClickOutside)
    document.addEventListener('keyup', this.onKeyup)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.onClickOutside)
    document.removeEventListener('keyup', this.onKeyup)
  }

  onCloseClick = () => {
    const { hideModal } = this.props

    hideModal()
  }

  onKeyup = ({ keyCode }) => {
    const { hideModal } = this.props

    if (keyCode === 27) {
      hideModal()
    }
  }

  render () {
    const { children, id, visibleModalId, saving } = this.props

    if (!visibleModalId || visibleModalId !== id) {
      return null
    }

    return (
      <div className='modal-backdrop'>
        <div id={id} className='modal'>
          <button className='modal-close'
            onClick={this.onCloseClick}
            disabled={saving}
            type='button'>
            X
          </button>
          {children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  visibleModalId: modalSelectors.getVisibleModalIdState(state)
})

const mapDispachToProps = (dispatch) => bindActionCreators({
  ...modalOperations
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispachToProps)(Modal))
