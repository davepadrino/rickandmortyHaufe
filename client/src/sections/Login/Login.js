import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const BackgroundLoginImage = styled.div`
  background-image: url("https://images6.alphacoders.com/909/thumb-1920-909641.png");
  background-size: cover;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 438px;
  top: 0;
`;

const FormContainer = styled.div`
  bottom: 0;
  position: absolute;
  right: 0;
  top: 20%;
  width: 360px;
  padding: 32px;
`;

const ErrorContainer = styled.div`
  margin-top: 32px;
  text-align: center;
`;

/**
 * Login form page
 */
const Login = ({ handleLogin, error }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  return (
    <form onSubmit={(event) => handleLogin(event, input)}>
      <BackgroundLoginImage />
      <FormContainer>
        <Input
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          value={input.email}
          type="email"
          fieldName="email"
          autoComplete="off"
          placeholder="Email"
        />
        <Input
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          value={input.password}
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Password"
        />
        <Button
          type="Submit"
          onClick={(event) => handleLogin(event, input)}
          text={"Login"}
        />
        {error && (
          <ErrorContainer>
            <ErrorMessage error={error.error} />
          </ErrorContainer>
        )}
      </FormContainer>
    </form>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func,
  error: PropTypes.string,
};

export default Login;
