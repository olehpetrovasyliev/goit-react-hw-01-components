import styled from 'styled-components';
// import { theme } from 'styles/theme';

export const Friends = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;
`;
export const Friend = styled.li`
  display: flex;
  border: 2px solid;
  border-color: #000;
  border-radius: 4px;
  padding: 10px;
`;

export const OnlineSpan = styled.span`
  border-radius: 100px;
  height: 10px;
  width: 10px;
  background-color: teal;
`;

export const OfflineSpan = styled.span`
  border-radius: 100px;
  height: 10px;
  width: 10px;
  background-color: tomato;
`;
