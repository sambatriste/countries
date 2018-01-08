import { combineReducers } from 'redux';
import questionReducer from './questionReducer';

const appReducer = combineReducers({
  question: questionReducer
});

export default appReducer;
