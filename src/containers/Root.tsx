import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import { Store } from 'reducers/types'

type Props = {
  store: Store
}

const Root: React.FC<Props> = ({ store }: Props) => (
  <Provider store={store}>
    <div id="app">
      <App />
    </div>
  </Provider>
)

export default Root
