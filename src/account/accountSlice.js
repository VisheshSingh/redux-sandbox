import { createSlice } from '@reduxjs/toolkit';

const accountInitialState = {
  isLoading: false,
  loan: 0,
  loanPurpose: '',
  balance: 0,
};

const accountSlice = createSlice({
  name: 'account',
  initialState: accountInitialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestloan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },

      reducer(state, action) {
        if (state.loan > 0) return;
        state.loanPurpose = action.payload.purpose;
        state.loan = action.payload.amount;
        state.balance += action.payload.amount;
      },
    },
    payloan(state) {
      state.balance -= state.loan;
      state.loan = 0;
    },
    loading(state) {
      state.isLoading = true;
    },
  },
});

console.log(accountSlice);

export const { deposit, withdraw, requestloan, payloan, loading } =
  accountSlice.actions;

export default accountSlice.reducer;

// export function deposit(amount, currency) {
//   if (currency === 'USD')
//     return {
//       type: 'account/deposit',
//       payload: amount,
//     };

//   return async function (dispatch, getState) {
//     dispatch({ type: 'account/loading' });
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     console.log(data);
//     dispatch({
//       type: 'account/deposit',
//       payload: data.rates.USD,
//     });
//   };
// }

// export function withdraw(amount) {
//   return {
//     type: 'account/withdraw',
//     payload: amount,
//   };
// }
// export function requestloan(amount, purpose) {
//   return {
//     type: 'account/requestloan',
//     payload: {
//       amount,
//       purpose,
//     },
//   };
// }
// export function payloan() {
//   return {
//     type: 'account/payloan',
//   };
// }
