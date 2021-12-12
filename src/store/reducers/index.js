import { combineReducers } from 'redux'
import facultyReducer from './facultyReducer'
import subjectReducer from './subjectReducer'

export default combineReducers({
  faculties: facultyReducer,
  subjects: subjectReducer
})