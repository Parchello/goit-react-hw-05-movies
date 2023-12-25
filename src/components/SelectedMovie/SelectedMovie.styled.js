import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  height: '100vh';
`;

export const SelectedMovieContainer = styled.div`
  display: flex;
  margin-left: 40px;
  margin-right: 40px;
`;

export const SelectedMovieDescrContainer = styled.div`
  margin-top: 100px;
  margin-left: 50px;
`;

export const SelectedMovieLinkList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: darkgray;

  &:hover {
    color: orange;
  }
  &.active {
    color: orange;
  }
`;
