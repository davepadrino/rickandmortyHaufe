import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoaderStyled = styled.div`
  border: 3px solid rgb(243, 243, 243);
  border-radius: 50%;
  border-top: 3px solid rgb(102, 102, 102);
  width: 50px;
  height: 50px;
  animation: ${rotate} 2s linear infinite;
  margin: 8px auto;
`;

/**
 * Custom loader component
 */
const Loader = () => <LoaderStyled />;

export default Loader;
