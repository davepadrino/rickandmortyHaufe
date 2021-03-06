import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/user";

const HeaderContainer = styled.div`
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background-color: #eee;
  box-shadow: rgb(0 0 0 / 16%) 0px 2px 2px;
  height: 60px;
  position: relative;
  display: flex;
  padding: 16px;
  & nav {
    width: 100%;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  & button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: inline;
    margin: 0;
    padding: 0;
  }
  & a,
  button {
    text-decoration: none;
    color: rgb(102, 102, 102);
  }
  & li {
    padding: 8px;
  }
  & li:last-child {
    margin-left: auto;
  }
`;

/**
 * App header to logged users
 */
const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <HeaderContainer>
      <nav>
        <MenuList>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <button onClick={() => handleLogout()}>Log out</button>
          </li>
        </MenuList>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
