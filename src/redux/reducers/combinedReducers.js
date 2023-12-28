import { combineReducers } from 'redux'
import authReducer from './userReducer'
import sidebarReducer from './sidebarReducer'

const rootReducer = combineReducers({
  user: authReducer,
  sidebar: sidebarReducer,
})

export default rootReducer
