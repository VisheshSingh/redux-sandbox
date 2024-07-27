const accountInitialState = {
  isLoading: false,
  loan: 0,
  balance: 0,
};

export function accountreducer(state = accountInitialState, action) {
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

export function deposit(amount) {
  return {
    type: 'account/deposit',
    payload: amount,
  };
}
export function withdraw(amount) {
  return {
    type: 'account/withdraw',
    payload: amount,
  };
}
export function requestloan(amount) {
  return {
    type: 'account/requestloan',
    payload: amount,
  };
}
export function payloan() {
  return {
    type: 'account/payloan',
  };
}
