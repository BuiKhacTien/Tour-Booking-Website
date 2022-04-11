import { combineReducers } from 'redux'
import ReducerSearch from './ReducerSearch'
import ReducerSession from './ReducerSession'

const ReducerRoot = combineReducers({
    Session: ReducerSession,
    Search: ReducerSearch,
})

export default ReducerRoot