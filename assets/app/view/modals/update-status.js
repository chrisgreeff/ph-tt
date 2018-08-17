import React from 'react'
import PropTypes from 'prop-types'

import { reduxService } from 'services'

import { Modal } from 'view/components'

class UpdateStatusModal extends React.Component {
  static propTypes = {
    clearModalContext: PropTypes.func.isRequired,
    fetchAndSetCustomer: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    modalContext: PropTypes.object.isRequired,
    setModalContext: PropTypes.func.isRequired,
    updateCustomerStatus: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)

    this.state = { saving: false }
  }

  onSubmit = async (event) => {
    const { updateCustomerStatus, fetchAndSetCustomer, hideModal, modalContext, match: { params: { id } } } = this.props
    const { status } = modalContext

    event.preventDefault()

    try {
      this.setState({ saving: true })

      await updateCustomerStatus(id, status)
      await fetchAndSetCustomer(id)

      hideModal()
      this.reset()
    } catch (error) {
      console.error(error)
      this.setState({ saving: false })
    }
  }

  reset = () => {
    const { clearModalContext } = this.props

    clearModalContext()
    this.setState({ saving: false })
  }

  onStatusChange = ({ target: { value: status } }) => {
    const { setModalContext } = this.props

    setModalContext({ status })
  }

  onCancelClick = () => {
    const { hideModal } = this.props

    this.reset()

    hideModal()
  }

  render () {
    const { modalContext } = this.props
    const { saving } = this.state

    // If the modal context hasn't been set, we can't render this modal.
    if (!modalContext.status) { return '' }

    const { status } = modalContext

    return (
      <Modal id='update-status-modal' saving={saving}>
        <form onSubmit={this.onSubmit}>
          <div className='modal-header'>
            Add Note
          </div>
          <div className='modal-content'>
            <div className='field'>
              <div className='value value--radio'>
                <div className='radio'>
                  <label>
                    <input type='radio' value='prospective'
                      checked={status === 'prospective'}
                      onChange={this.onStatusChange}
                    />
                    Prospective
                  </label>
                </div>
                <div className='radio'>
                  <label>
                    <input type='radio' value='current'
                      checked={status === 'current'}
                      onChange={this.onStatusChange}
                    />
                    Current
                  </label>
                </div>
                <div className='radio'>
                  <label>
                    <input type='radio' value='non-active'
                      checked={status === 'non-active'}
                      onChange={this.onStatusChange}
                    />
                    Non Active
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='modal-footer'>
            <button className='button button--secondary'
              onClick={this.onCancelClick}
              disabled={saving}
              type='button'>
              Cancel
            </button>
            <button className='button button--primary'
              disabled={saving}
              type='submit'>
              Update Status
            </button>
          </div>
        </form>
      </Modal>
    )
  }
}

export default reduxService.connect(UpdateStatusModal)
