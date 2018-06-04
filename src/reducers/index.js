import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import newsletterReducer from './newsletterReducer';

const rootReducer = combineReducers({
  form,
  newsletter: newsletterReducer
});

export default rootReducer;