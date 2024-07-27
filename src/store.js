import { accountreducer } from './account/accountSlice';
import { customerreducer } from './customer/customerSlice';
import { configureStore } from '@reduxjs/toolkit';

// const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk));
const store = configureStore({
  reducer: {
    account: accountreducer,
    customer: customerreducer,
  },
});

export default store;
