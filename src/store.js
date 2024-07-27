import { combineReducers, createStore } from 'redux';

const accountInitialState = {
  isLoading: false,
  loan: 0,
  balance: 0,
};
const customerInitialState = {
  fullname: '',
  customerId: '',
  createdAt: new Date().toISOString(),
};

function accountreducer(state = accountInitialState, action) {
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
function customerreducer(state = customerInitialState, action) {
  switch (action.type) {
    case 'customer/createProfile':
      return {
        ...state,
        fullname: action.payload.fullname,
        customerId: action.payload.customerId,
      };
    case 'customer/updateProfile':
      return {
        ...state,
        fullname: action.payload.fullname,
      };
    default:
      return state;
  }
}

const rootReducer = {
  account: accountreducer,
  customer: customerreducer,
};

const store = createStore(combineReducers(rootReducer));

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

function createProfile(fullname, customerId) {
  return {
    type: 'customer/createProfile',
    payload: {
      fullname,
      customerId,
    },
  };
}
function updateProfile(fullname) {
  return {
    type: 'customer/updateProfile',
    payload: { fullname },
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

store.dispatch(createProfile('John Doe', 12345));
console.log(store.getState());
store.dispatch(updateProfile('John Adams'));
console.log(store.getState());

export default store;
