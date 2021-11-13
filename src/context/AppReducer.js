/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case 'USER_LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
