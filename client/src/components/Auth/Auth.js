import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

/**
 * Auth Wrapper to separate the sections that needs login
 * from the ones that doesn't
 */
const AuthRoute = ({ component: Component, isAuthUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthUser ? <Component {...props} /> : <Redirect to={"/login"} />
    }
  />
);

AuthRoute.propTypes = {
  component: PropTypes.any,
  isAuthUser: PropTypes.bool,
};

export default AuthRoute;
