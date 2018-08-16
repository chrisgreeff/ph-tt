import { map } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { reduxService } from 'services'

import { LoadingPage, Section } from 'view/components'

class CustomerViewPage extends React.Component {
  static propTypes = {
    customer: PropTypes.object.isRequired,
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
          </div>
          <div className='section-content'>
            <div className='field'>
              <label className='label'>Email</label>
              <div className='value'>{customer.email}</div>
            </div>
            <div className='field'>
              <label className='label'>Phone</label>
              <div className='value'>{customer.phone}</div>
            </div>
            <div className='field'>
              <label className='label'>Status</label>
              <div className='value'>{customer.status}</div>
            </div>
            <div className='field'>
              <label className='label'>CreatedAt</label>
              <div className='value'>{customer.createdAt.format('DD/MM/YYYY HH:MM')}</div>
            </div>
          </div>
        </Section>

        <Section>
          <div className='section-content section-content--header'>
            Notes
          </div>
          {map(customer.notes, (note, index) => (
            <div className='section-content' key={index}>
              {note.content}
            </div>
          ))}
          <div className='section-content'>
            <button className='button button--primary' onClick={this.onAddNoteClick}>Add Note</button>
          </div>
        </Section>
      </LoadingPage>
    )
  }
}

export default reduxService.connect(CustomerViewPage)
