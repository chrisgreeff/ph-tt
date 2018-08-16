import React from 'react'
import PropTypes from 'prop-types'

import { reduxService } from 'services'
import { CustomerNoteModel } from 'models'

import {
  Modal
} from 'view/components'

class AddNoteModal extends React.Component {
  static propTypes = {
    createCustomerNote: PropTypes.func.isRequired,
    fetchAndSetCustomer: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  }

  constructor (props) {
    super(props)

    this.state = {
      formData: new CustomerNoteModel(),
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

  onInputChange = ({ target }) => {
    const { formData } = this.state
    const { name, value } = target

    formData[name] = value

    this.setState({ formData })
  }

  onCancelClick = () => {
    const { hideModal } = this.props

    this.reset()

    hideModal()
  }

  render () {
    const { formData, saving } = this.state

    return (
      <Modal id='add-note-modal' saving={saving}>
        <form onSubmit={this.onSubmit}>
          <div className='modal-header'>
            Add Note
          </div>
          <div className='modal-content'>
            <div className='field'>
              <div className='value'>
                <input className='input'
                  value={formData.content}
                  onChange={this.onInputChange}
                  placeholder='Add note...'
                  name='content'
                  type='text'
                  disabled={saving}
                  autoFocus
                />
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

export default reduxService.connect(AddNoteModal)
