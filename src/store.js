import { combineReducers, createStore } from 'redux';
import { accountreducer } from './account/accountSlice';
import { customerreducer } from './customer/customerSlice';

const rootReducer = {
  account: accountreducer,
  customer: customerreducer,
};

const store = createStore(combineReducers(rootReducer));

export default store;
