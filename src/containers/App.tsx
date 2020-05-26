import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './HomePage'
import CounterPage from './CounterPage'
import routers from 'router/router.json'
import { router } from 'styles/router'

export default class MyRouter extends React.Component {
  render() {
    return (
      <Router>
        <div className={router}>
          <Switch>
            <Route path={routers.HOME} exact component={HomePage}></Route>
            <Route path={routers.COUNTER} exact component={CounterPage}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
