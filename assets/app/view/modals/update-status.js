import React from 'react'
import PropTypes from 'prop-types'

import { reduxService } from 'services'
import { CustomerNoteModel } from 'models'

import {
  Modal
} from 'view/components'

class UpdateStatusModal extends React.Component {
  static propTypes = {
    createCustomerNote: PropTypes.func.isRequired,
    fetchAndSetCustomer: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  }

  constructor (props) {
    super(props)

    this.state = {
      status: 'prospective',
      saving: false,
    }
  }

  onSubmit = async (event) => {
    const {
      createCustomerNote,
      fetchAndSetCustomer,
      hideModal,
      match: { params: { id } }
    } = this.props
    const { formData } = this.state

    event.preventDefault()

    try {
      formData.customerId = id
      this.setState({ saving: true })

      await createCustomerNote(formData)
      await fetchAndSetCustomer(id)

      hideModal()
      this.reset()
    } catch (error) {
      console.error(error)
      this.setState({ saving: false })
    }
  }

  reset = () => {
    this.setState({
      formData: new CustomerNoteModel(),
      saving: false,
    })
  }

  onStatusChange = ({ target: { value: status } }) => {
    this.setState({ status })
  }

  onCancelClick = () => {
    const { hideModal } = this.props

    this.reset()

    hideModal()
  }

  render () {
    const { saving, status } = this.state

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
              Add Note
            </button>
          </div>
        </form>
      </Modal>
    )
  }
}

export default reduxService.connect(UpdateStatusModal)
