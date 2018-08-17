import './section.scss'

import React from 'react'
import PropTypes from 'prop-types'

export default class Section extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    view: PropTypes.bool,
  }

  render () {
    const { children, view } = this.props
    const classes = ['section']

    if (view) { classes.push('section--view') }

    return (
      <div className={classes.join(' ')}>
        <div className='section-wrap'>
          {children}
        </div>
      </div>
    )
  }
}
