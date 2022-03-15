import {ActionType} from 'redux-promise-middleware';

const initialState = {
  userData: {
    token: '',
    id: null,
    roles: null,
  },
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};

const authReducer = (prevState = initialState, action) => {
  const {Pending, Fulfilled, Rejected} = ActionType;

  switch (action.type) {
    case `AUTH_LOGIN_${Pending}`:
      return {
        ...prevState,
        isPending: true,
      };
    case `AUTH_LOGIN_${Fulfilled}`:
      const data = action.payload.data;
      const userData = {
        ...prevState.userData,
        token: data.data.token,
        id: data.data.id,
        roles: data.data.role_id,
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        userData,
      };
    case `AUTH_LOGIN_${Rejected}`:
      const err = action.payload;
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err,
      };
    case `AUTH_LOGOUT`:
      return {
        ...initialState,
      };
    default:
      return prevState;
  }
};

export default authReducer;
