import 'phtt.scss'
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import store, { history } from 'redux/store'

import {
  CustomerListPage,
  CustomerViewPage
} from 'view/pages'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/customers/:id' component={CustomerViewPage} />
        <Route path='/customers' component={CustomerListPage} />
        <Redirect to='/customers' />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('phtt-app'))
