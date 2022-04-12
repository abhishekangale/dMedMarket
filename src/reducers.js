import { combineReducers } from 'redux'

// import sourceResearcherReducer from './scenes/SourceResearcher'
import { reducer as reduxFormReducer } from 'redux-form'

export default combineReducers({
  // sourceResearcher: sourceResearcherReducer,
  form: reduxFormReducer // mounted under "form"
})
