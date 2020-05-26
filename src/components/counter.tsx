import React from 'react'
import { Link } from 'react-router-dom'

import routers from 'router/router.json'
import { counter as counterClass } from 'styles/component/counter'

type Props = {
  increment: () => void
  incrementIfOdd: () => void
  incrementAsync: () => void
  decrement: () => void
  counter: number
}

export default class Counter extends React.Component<Props> {
  static props: Props

  render() {
    const {
      increment,
      decrement,
      incrementIfOdd,
      incrementAsync,
      counter
    } = this.props
    return (
      <div className={counterClass}>
        <div className="back-home">
          <Link to={routers.HOME}>go back</Link>
        </div>
        <div className="counter">{counter}</div>
        <div className="btn-group">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={incrementIfOdd}>odd</button>
          <button onClick={() => incrementAsync()}>async</button>
        </div>
      </div>
    )
  }
}
