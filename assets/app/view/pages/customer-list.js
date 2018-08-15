import { map } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { reduxService } from 'services'

import { LoadingPage } from 'view/components'

class CustomerListPage extends React.Component {
  static propTypes = {
    customers: PropTypes.array.isRequired,
  }

  constructor (props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount = async () => {
    const { fetchAndSetCustomers } = this.props

    await fetchAndSetCustomers()

    this.setState({ loading: false })
  }

  render () {
    const { customers } = this.props
    const { loading } = this.state

    return (
      <LoadingPage loading={loading}>
        <h1>Customers</h1>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {map(customers, (customer, index) => (
              <tr key={index}>
                <td>{customer.id}</td>
                <td>
                  <Link to={`/customers/${customer.id}`}>
                    {customer.fullName}
                  </Link>
                </td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.status}</td>
                <td>{customer.createdAt.format('DD/MM/YYYY HH:MM')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </LoadingPage>
    )
  }
}

export default reduxService.connect(CustomerListPage)
