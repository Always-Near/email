import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createRootReducer from 'reducers/index'

const reducers = createRootReducer()
const initState = {}
export default createStore(reducers, initState, applyMiddleware(thunk))
