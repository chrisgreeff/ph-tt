import './loading-page.scss'

import React from 'react'
import PropTypes from 'prop-types'

export default class LoadingPage extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    loading: PropTypes.bool,
  }

  render () {
    const { children, loading } = this.props

    return (
      <div className='loading-page'>
        {loading
          ? 'Loading Page...'
          : <React.Fragment>{children}</React.Fragment>
        }
      </div>
    )
  }
}
