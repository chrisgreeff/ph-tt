import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import store, { history } from 'redux/store'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/customers' component={CustomerListPage} />
        <Route path='/customers/:id' component={CustomerViewPage} />
        <Redirect to='/customers' />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('ros-app'))
