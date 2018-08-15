import { map } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { reduxService } from 'services'

import { LoadingPage } from 'view/components'

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
        <h1>{customer.fullName}</h1>
        <div>{customer.email}</div>
        <div>{customer.phone}</div>
        <div>{customer.status}</div>
        <div>{customer.createdAt.format('DD/MM/YYYY HH:MM')}</div>
        <div>
          {map(customer.notes, (note, index) => (
            <div key={index}>
              {note.content}
            </div>
          ))}
        </div>
      </LoadingPage>
    )
  }
}

export default reduxService.connect(CustomerViewPage)
