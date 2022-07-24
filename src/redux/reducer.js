// eslint-disable-next-line import/no-extraneous-dependencies
import {combineReducers} from 'redux';
import contactService from './services/contact.service';

export default combineReducers({
  [contactService.reducerPath]: contactService.reducer,
});
