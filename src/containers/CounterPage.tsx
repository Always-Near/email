import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from 'components/counter'
import {
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync
} from 'actions/counter'
import { StateType, Dispatch } from 'reducers/types'

function mapStateToProps(state: StateType) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    { increment, decrement, incrementIfOdd, incrementAsync },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
