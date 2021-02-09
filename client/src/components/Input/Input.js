import PropTypes from "prop-types";
import styled from "styled-components";

const InputContainer = styled.div`
  margin-bottom: 16px;
`;

const InputLabel = styled.label`
  display: none;
`;

const InputField = styled.input`
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  color: rgb(51, 51, 51);
  padding: 8px 32px 8px 12px;
  margin-bottom: 24px;
  font-size: 14px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  height: 32px;
  &:hover {
    border: 1px solid rgb(0, 144, 144);
  }
`;

/**
 * Input field component
 */
const Input = ({ fieldName, type = "text", placeholder, value, onChange }) => (
  <InputContainer>
    <InputLabel htmlFor={fieldName} />
    <InputField
      name={fieldName}
      type={type}
      id={fieldName}
      placeholder={placeholder}
      value={value}
      autoComplete="off"
      onChange={onChange}
    />
  </InputContainer>
);

Input.propTypes = {
  fieldName: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
