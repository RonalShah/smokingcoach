import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useInput } from "./mainProvider";

const ProtectedRoute = ({ component: RouteComponent, user, ...rest }) => {
    
  const { smokingData, dispatch } = useInput();

  return (

    <Route
      {...rest}
      render={(routeProps) =>
        user ? (
          <RouteComponent {...routeProps} user={user} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />

  );
};

export default ProtectedRoute;
