import React from "react";
import { Route, Redirect } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children, ...rest }) => {
  const { data, loading, error } = useQuery(IS_LOGGED_IN);
  const { isLoggedIn } = data;

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
