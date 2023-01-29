import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import toDoReducer from './reducers/toDoReducer';


const store = createStore(toDoReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;