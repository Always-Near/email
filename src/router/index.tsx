import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import routers from './router.json'
import { router } from '~/styles/router'
import HomePage from '~/pages/HomePage'

const Root: React.FC = () => (
  <Router>
    <div className={router}>
      <Switch>
        <Route path={routers.HOME} exact component={HomePage}></Route>
      </Switch>
    </div>
  </Router>
)

export default Root
