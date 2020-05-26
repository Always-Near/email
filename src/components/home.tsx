import React from 'react'
import { Link } from 'react-router-dom'
import { home } from 'styles/component/home'
import routers from 'router/router.json'

export default class Home extends React.Component {
  render() {
    return (
      <div className={home}>
        <h2>Home</h2>
        <Link to={routers.COUNTER}>to Counter</Link>
      </div>
    )
  }
}
