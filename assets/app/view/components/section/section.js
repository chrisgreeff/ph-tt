import './section.scss'

import React from 'react'
import PropTypes from 'prop-types'

export default class Section extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render () {
    const { children } = this.props

    return (
      <div className='section'>
        <div className='section-wrap'>
          {children}
        </div>
      </div>
    )
  }
}
