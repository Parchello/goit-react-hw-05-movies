import styled from 'styled-components';
const { NavLink } = require('react-router-dom');

export const StyledHeader = styled.header`
  background-color: #333;
  padding: 10px;
  color: white;
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

export const StyledLi = styled.li`
  margin: 0;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &:hover {
    color: orange;
  }
  &.active {
    color: orange;
  }
`;
