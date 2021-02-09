import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-image: url("https://wallpapercave.com/wp/wp5475030.jpg");
  background-size: cover;
  width: 100%;
  position: absolute;
  height: 100%;
`;

const Hola = styled.div`
  width: 450px;
  height: 300px;
  background: rgb(0 0 0 / 85%);
  position: absolute;
  top: 200px;
  left: 200px;
  display: inline-block;
  word-break: break-word;
`;

const NotFoundText = styled.div`
  font-size: xxx-large;
  margin-bottom: 50px;
`;

/**
 * Not found page
 */
const NotFound = () => {
  return (
    <Container>
      <Hola>
        <NotFoundText>
          The place you're looking for....DOESN'T EXIST!!
        </NotFoundText>
        <div>
          <Link to="/">Back to somewhere else!</Link>
        </div>
      </Hola>
    </Container>
  );
};

export default NotFound;
