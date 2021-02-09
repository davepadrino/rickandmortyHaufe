import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/user";
import { loginService } from "../../services/api";
import Login from "./Login";

/**
 * Login page container
 */
const LoginContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState();

  const handleLogin = async (event, user) => {
    try {
      event.preventDefault();
      const { data } = await loginService(user);
      localStorage.setItem("tokenChallenge", data.token);
      setError();
      dispatch(login({ user: data.user }));
      history.push("/");
    } catch (error) {
      const errorMessage = error.response.data.err.message;
      setError({ error: errorMessage });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("tokenChallenge")) {
      history.push("/");
    }
  }, []);

  return <Login handleLogin={handleLogin} error={error} />;
};

export default LoginContainer;
