import { configureStore } from '@reduxjs/toolkit';

import accountSlice from './account/accountSlice';
import customerSlice from './customer/customerSlice';

// const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk));
const store = configureStore({
  reducer: {
    account: accountSlice,
    customer: customerSlice,
  },
});

export default store;
