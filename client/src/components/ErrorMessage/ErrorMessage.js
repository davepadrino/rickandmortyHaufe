import PropTypes from "prop-types";
import styled from "styled-components";

const ErrorText = styled.div`
  color: red;
`;

/**
 * Error message component
 */
const ErrorMessage = ({ error }) => <ErrorText>{error}</ErrorText>;

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
