import React from 'react'
import PropTypes from 'prop-types'

import { reduxService } from 'services'
import { CustomerNoteModel } from 'models'

import {
  Modal
} from 'view/components'

class UpdateNoteModal extends React.Component {
  static propTypes = {
    customer: PropTypes.object.isRequired,
    fetchAndSetCustomer: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    modalContext: PropTypes.object.isRequired,
    setModalContext: PropTypes.func.isRequired,
    updateCustomerNote: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)

    this.state = { saving: false }
  }

  onSubmit = async (event) => {
    const {
      updateCustomerNote,
      fetchAndSetCustomer,
      hideModal,
      modalContext,
      customer
    } = this.props
    const { formData } = modalContext

    event.preventDefault()

    try {
      this.setState({ saving: true })

      await updateCustomerNote(formData.id, formData)
      await fetchAndSetCustomer(customer.id)

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
    const { modalContext: { formData }, setModalContext } = this.props
    const { name, value } = target

    formData[name] = value

    setModalContext({ formData })
  }

  onCancelClick = () => {
    const { hideModal } = this.props

    this.reset()

    hideModal()
  }

  render () {
    const { modalContext } = this.props
    const { saving } = this.state

    if (!modalContext.formData) { return '' }

    const { formData } = modalContext

    return (
      <Modal id='update-note-modal' saving={saving}>
        <form onSubmit={this.onSubmit}>
          <div className='modal-header'>
            Update Note
          </div>
          <div className='modal-content'>
            <div className='field'>
              <div className='value'>
                <input className='input'
                  value={formData.content}
                  onChange={this.onInputChange}
                  placeholder='Update note...'
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
              Update Note
            </button>
          </div>
        </form>
      </Modal>
    )
  }
}

export default reduxService.connect(UpdateNoteModal)
