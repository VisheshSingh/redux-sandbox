import { createSlice } from '@reduxjs/toolkit';

const customerInitialState = {
  fullname: '',
  customerId: '',
  createdAt: new Date().toISOString(),
};

const customerSlice = createSlice({
  name: 'customer',
  initialState: customerInitialState,
  reducers: {
    createProfile: {
      prepare(fullname, customerId) {
        return {
          payload: {
            fullname,
            customerId,
          },
        };
      },
      reducer(state, action) {
        state.fullname = action.payload.fullname;
        state.customerId = action.payload.customerId;
      },
    },
    updateProfile(state, action) {
      state.fullname = action.payload;
    },
  },
});

export const { createProfile, updateProfile } = customerSlice.actions;
export default customerSlice.reducer;

// export function createProfile(fullname, customerId) {
//   return {
//     type: 'customer/createProfile',
//     payload: {
//       fullname,
//       customerId,
//     },
//   };
// }

// export function updateProfile(fullname) {
//   return {
//     type: 'customer/updateProfile',
//     payload: { fullname },
//   };
// }
