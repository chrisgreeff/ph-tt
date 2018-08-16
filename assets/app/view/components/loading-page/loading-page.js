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
      <React.Fragment>
        {loading
          ? <div className='page page--loading'>Loading Page...</div>
          : <div className='page'>{children}</div>
        }
      </React.Fragment>
    )
  }
}
