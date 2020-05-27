import React, { useReducer, createContext } from "react";

const initialState = {
  isLoggedIn: false,
  isUser: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
};
