import { map } from 'lodash'

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { reduxService } from 'services'
import { AddNoteModal, UpdateStatusModal } from 'view/modals'
import { LoadingPage, Section } from 'view/components'

class CustomerViewPage extends React.Component {
  static propTypes = {
    customer: PropTypes.object.isRequired,
    fetchAndSetCustomer: PropTypes.func.isRequired,
    setModalContext: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)

    this.state = { loading: true }
  }

  componentDidMount = async () => {
    const { match: { params: { id } }, fetchAndSetCustomer } = this.props

    await fetchAndSetCustomer(id)

    this.setState({ loading: false })
  }

  onAddNoteClick = () => {
    const { showModal } = this.props

    showModal('add-note-modal')
  }

  onUpdateStatusClick = () => {
    const { customer, showModal, setModalContext } = this.props

    setModalContext({ status: customer.status })

    showModal('update-status-modal')
  }

  render () {
    const { customer } = this.props
    const { loading } = this.state

    return (
      <LoadingPage loading={loading}>
        <Section>
          <Link className='link' to='/customers'>Back</Link>
          <h1>{customer.fullName}</h1>
        </Section>

        <Section>
          <div className='section-content section-content--header'>
            Personal Information
            <button className='button button--link' onClick={this.onUpdateStatusClick}>Update Status</button>
          </div>
          <div className='section-content'>
            <div className='field'>
              <label className='label'>Email</label>
              <div className='value'>{customer.email}</div>
            </div>
          </div>
          <div className='section-content'>
            <div className='field'>
              <label className='label'>Phone</label>
              <div className='value'>{customer.phone}</div>
            </div>
          </div>
          <div className='section-content'>
            <div className='field'>
              <label className='label'>Status</label>
              <div className='value'>{customer.status}</div>
            </div>
          </div>
          <div className='section-content'>
            <div className='field'>
              <label className='label'>CreatedAt</label>
              <div className='value'>{customer.createdAt.format('ddd, DD MMM YYYY | (hh:mm A)')}</div>
            </div>
          </div>
        </Section>

        <Section>
          <div className='section-content section-content--header'>
            Notes
            <button className='button button--link' onClick={this.onAddNoteClick}>+ Add Note</button>
          </div>
          {customer.notes.length
            ? <React.Fragment>
              {map(customer.notes, (note, index) => (
                <div className='section-content section-content--note' key={index}>
                  <div className='field'>
                    <label className='label label--secondary'>
                      {note.createdAt.format('ddd, DD MMM YYYY | (hh:mm A)')}
                    </label>
                    <div className='value'>
                      {note.content}
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
            : <div className='section-content'>
            This customer has no notes.
            </div>
          }
        </Section>
        <AddNoteModal />
        <UpdateStatusModal />
      </LoadingPage>
    )
  }
}

export default reduxService.connect(CustomerViewPage)
