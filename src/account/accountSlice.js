const accountInitialState = {
  isLoading: false,
  loan: 0,
  loanPurpose: '',
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
      console.log({ state, action });
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
        loanPurpose: action.payload.purpose,
        loan: action.payload.amount,
        balance: state.balance + action.payload.amount,
      };
    case 'account/payloan':
      return {
        ...state,
        isLoading: false,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

export function deposit(amount, currency) {
  if (currency === 'USD')
    return {
      type: 'account/deposit',
      payload: amount,
    };

  return function (dispatch, getState) {
    fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: 'account/deposit',
          payload: data.rates.USD,
        });
      });
  };
}

export function withdraw(amount) {
  return {
    type: 'account/withdraw',
    payload: amount,
  };
}
export function requestloan(amount, purpose) {
  return {
    type: 'account/requestloan',
    payload: {
      amount,
      purpose,
    },
  };
}
export function payloan() {
  return {
    type: 'account/payloan',
  };
}
