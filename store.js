
import { createStore, combineReducers } from 'redux';
import studentReducer from './reducers/studentReducer';

const rootReducer = combineReducers({
  students: studentReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;