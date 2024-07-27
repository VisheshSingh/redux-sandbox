import { createStore } from 'redux';

const initialState = {
  isLoading: false,
  loan: 0,
  balance: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'account/loading':
      return {
        ...state,
        isLoading: true,
      };
    case 'account/deposit':
      return {
        ...state,
        isLoading: false,
        balance: state.balance + action.payload,
      };
    case 'account/withdraw':
      return {
        ...state,
        isLoading: false,
        balance: state.balance - action.payload,
      };
    case 'account/requestloan':
      if (state.loan > 0) return state;
      return {
        ...state,
        isLoading: false,
        laon: action.payload,
      };
    case 'account/payloan':
      return {
        ...state,
        isLoading: false,
        loan: 0,
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({ type: 'account/deposit', payload: 500 });
console.log(store.getState());
store.dispatch({ type: 'account/withdraw', payload: 200 });
console.log(store.getState());

export default store;
