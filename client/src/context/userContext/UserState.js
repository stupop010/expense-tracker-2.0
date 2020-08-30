import React, { useReducer, createContext } from "react";

import UserReducer from "./UserReducer";

const initialState = {
  isLoggedIn: false,
  user: {},
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const updateUser = (user) => {
    dispatch({
      type: "UPDATE_USER",
      payload: user,
    });
  };

  const logoutUser = () => {
    dispatch({
      type: "LOGOUT_USER",
    });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        updateUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
