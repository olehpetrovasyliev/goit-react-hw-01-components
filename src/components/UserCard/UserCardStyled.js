import styled from 'styled-components';
// import { theme } from 'styles/theme';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 400px;
`;
export const UserSlatsList = styled.ul`
  display: flex;
  list-style: none;
  gap: 24px;
  padding: 0;
`;

export const UserSlatsElement = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
