import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonComponent = styled.button`
  box-sizing: border-box;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  border: 0px;
  height: 32px;
  color: rgb(51, 51, 51);
  background: linear-gradient(rgb(217, 217, 217) 0%, rgb(204, 204, 204) 100%);
  padding: 0px 24px;
`;

/**
 * Button custom component
 */
const Button = ({ disabled = false, text, onClick }) => (
  <ButtonComponent disabled={disabled} onClick={onClick}>
    {text}
  </ButtonComponent>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
