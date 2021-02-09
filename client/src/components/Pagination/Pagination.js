import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 50px 0;
`;

const PageAction = styled.a`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  ${(props) => props.isDisabled && "pointer-events: none;"}
`;

/**
 * Paginator component to navigate between available pages
 */
const Pagination = ({ paginationInfo, onClick }) => {
  const { page, next, prev, pages } = paginationInfo;

  const getPageNumber = (navigationString) => navigationString?.split("=")[1];

  const handleClick = (event, page) => {
    event.preventDefault();
    if (page) onClick(page);
  };

  return (
    <Container>
      <PageAction
        href="#"
        onClick={(event) => handleClick(event, getPageNumber(prev))}
        isDisabled={!getPageNumber(prev)}
      >
        &laquo;{"Previous"}
      </PageAction>
      <PageAction>{`Page ${page} of ${pages}`}</PageAction>
      <PageAction
        href="#"
        onClick={(event) => handleClick(event, getPageNumber(next))}
        isDisabled={!getPageNumber(next)}
      >
        {"Next"}&raquo;
      </PageAction>
    </Container>
  );
};

Pagination.propTypes = {
  paginationInfo: PropTypes.shape({
    page: PropTypes.number,
    next: PropTypes.string,
    prev: PropTypes.string,
    pages: PropTypes.number,
    count: PropTypes.number,
  }),
  onClick: PropTypes.func,
};

export default Pagination;
