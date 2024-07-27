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
        loan: action.payload,
        balance: state.balance + action.payload,
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

function deposit(amount) {
  return {
    type: 'account/deposit',
    payload: amount,
  };
}
function withdraw(amount) {
  return {
    type: 'account/withdraw',
    payload: amount,
  };
}
function requestloan(amount) {
  return {
    type: 'account/requestloan',
    payload: amount,
  };
}
function payloan() {
  return {
    type: 'account/payloan',
  };
}

store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestloan(1000));
console.log(store.getState());
store.dispatch(payloan());
console.log(store.getState());

export default store;
