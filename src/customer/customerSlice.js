const customerInitialState = {
  fullname: '',
  customerId: '',
  createdAt: new Date().toISOString(),
};

export function customerreducer(state = customerInitialState, action) {
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

export function createProfile(fullname, customerId) {
  return {
    type: 'customer/createProfile',
    payload: {
      fullname,
      customerId,
    },
  };
}

export function updateProfile(fullname) {
  return {
    type: 'customer/updateProfile',
    payload: { fullname },
  };
}
