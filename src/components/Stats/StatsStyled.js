import styled from 'styled-components';
// import { theme } from 'styles/theme';

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  gap: 4px;
`;
export const StatsElement = styled.li`
  background-color: ${({ randomColor }) => randomColor};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 6px;
`;
