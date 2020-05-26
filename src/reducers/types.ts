import {
  Dispatch as ReduxDispatch,
  Store as ReduxStore,
  CombinedState
} from 'redux'

export type StateType = {
  counter: number
}

export type Action = {
  type: string
}

export type Dispatch = ReduxDispatch<Action>

export type Store = ReduxStore<CombinedState<StateType>, Action>

export type GetState = Store['getState']
