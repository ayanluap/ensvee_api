import axios from 'axios';
import { createContext, useContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Init state
const initialState = {
  userInfo: null,
  error: null,
  loading: true,
};

// create context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const loginAction = (data) => {
    const options = {
      method: 'POST',
      url: '/api/v1/users/login',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    axios(options)
      .then((res) =>
        dispatch({
          type: 'USER_LOGIN',
          payload: res.data.data.user,
        })
      )
      .catch((err) =>
        dispatch({
          type: 'USER_LOGIN_ERROR',
          payload: err.response.data.message,
        })
      );
  };

  return (
    <GlobalContext.Provider
      value={{
        userInfo: state.userInfo,
        error: state.error,
        loading: state.loading,

        loginAction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
