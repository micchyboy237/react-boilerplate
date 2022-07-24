// eslint-disable-next-line import/no-extraneous-dependencies
import {combineReducers} from 'redux';
import contactReducer from './slices/contact.slice';

export default combineReducers({
  contact: contactReducer,
});
