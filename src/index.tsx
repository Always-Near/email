import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'containers/Root'
import store from 'store/index'
import 'styles/index.css'

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
