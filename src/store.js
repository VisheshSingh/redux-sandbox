import { applyMiddleware, combineReducers, createStore } from 'redux';
import { accountreducer } from './account/accountSlice';
import { customerreducer } from './customer/customerSlice';
import { thunk } from 'redux-thunk';

const rootReducer = {
  account: accountreducer,
  customer: customerreducer,
};

const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk));

export default store;
