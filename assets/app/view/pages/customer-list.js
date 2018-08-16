import { filter, includes, map, toLower, reverse, sortBy } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { reduxService } from 'services'

import { LoadingPage } from 'view/components'

class CustomerListPage extends React.Component {
  static propTypes = {
    customers: PropTypes.array.isRequired,
    fetchAndSetCustomers: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      filterValue: '',
      sortKey: 'id',
      reverseCustomers: false,
    }
  }

  componentDidMount = async () => {
    const { fetchAndSetCustomers } = this.props

    await fetchAndSetCustomers()

    this.setState({ loading: false })
  }

  onSortClick = (newSortKey) => {
    const { sortKey, reverseCustomers } = this.state

    if (newSortKey === sortKey) {
      this.setState({ reverseCustomers: !reverseCustomers })
    } else {
      this.setState({ sortKey: newSortKey, reverseCustomers: false })
    }
  }

  onFilterChange = ({ target: { value: filterValue } }) => {
    this.setState({ filterValue })
  }

  getFilteredCustomers = () => {
    const { customers } = this.props
    const { filterValue, sortKey, reverseCustomers } = this.state
    const valueToCheck = toLower(filterValue)

    let filteredCustomers = filterValue ? filter(customers, (customer) => (
      includes(toLower(customer.fullName), valueToCheck) ||
      includes(toLower(customer.email), valueToCheck) ||
      includes(toLower(customer.phone), valueToCheck) ||
      includes(toLower(customer.status), valueToCheck)
    )) : customers

    filteredCustomers = sortBy(filteredCustomers, sortKey)

    if (reverseCustomers) {
      filteredCustomers = reverse(filteredCustomers)
    }

    return filteredCustomers
  }

  renderSortIcon (columnKey) {
    const { sortKey, reverseCustomers } = this.state

    if (columnKey === sortKey) {
      return reverseCustomers ? '↑' : '↓'
    }
  }

  render () {
    const { loading, filterValue } = this.state
    const customers = this.getFilteredCustomers()

    return (
      <LoadingPage loading={loading}>
        <h1>Customers</h1>

        <input className='input'
          value={filterValue}
          onChange={this.onFilterChange}
          placeholder='Filter customers'
        />

        <table className='table'>
          <thead>
            <tr>
              <th>
                <button className='button button--link'
                  onClick={() => this.onSortClick('id')}>
                  ID {this.renderSortIcon('id')}
                </button>
              </th>
              <th>
                <button className='button button--link'
                  onClick={() => this.onSortClick('fullName')}>
                  Name
                  {this.renderSortIcon('fullName')}
                </button>
              </th>
              <th>
                <button className='button button--link'
                  onClick={() => this.onSortClick('email')}>
                  Email
                  {this.renderSortIcon('email')}
                </button>
              </th>
              <th>
                <button className='button button--link'
                  onClick={() => this.onSortClick('phone')}>
                  Phone
                  {this.renderSortIcon('phone')}
                </button>
              </th>
              <th>
                <button className='button button--link'
                  onClick={() => this.onSortClick('status')}>
                  Status
                  {this.renderSortIcon('status')}
                </button>
              </th>
              <th>
                <button className='button button--link'
                  onClick={() => this.onSortClick('createdAt')}>
                  Created At
                  {this.renderSortIcon('createdAt')}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.length
              ? <React.Fragment>
                {map(this.getFilteredCustomers(), (customer, index) => (
                  <tr key={index}>
                    <td>{customer.id}</td>
                    <td>
                      <Link className='link' to={`/customers/${customer.id}`}>
                        {customer.fullName}
                      </Link>
                    </td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.status}</td>
                    <td>{customer.createdAt.format('DD/MM/YYYY HH:MM')}</td>
                  </tr>
                ))}
              </React.Fragment>
              : <tr>
                <td colSpan={7}>There are no customers that match your filter value</td>
              </tr>
            }
          </tbody>
        </table>
      </LoadingPage>
    )
  }
}

export default reduxService.connect(CustomerListPage)
