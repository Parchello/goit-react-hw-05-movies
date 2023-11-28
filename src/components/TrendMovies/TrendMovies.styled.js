import styled from 'styled-components';

export const FilmList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;

export const FilmLi = styled.li`
  margin-left: 50px;
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 300px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const FilmName = styled.p`
  text-decoration: none;
  font-size: 16px;
  margin-top: 12px;
  color: rgb(17, 17, 17);
  font-weight: 500;
  text-align: center;
`;
