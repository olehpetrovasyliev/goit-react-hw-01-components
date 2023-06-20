import { StatsElement } from 'components/Stats/StatsStyled';
export const StatsComponent = ({ id, label, percentage, randomColor }) => {
  return (
    <StatsElement key={id} className="item" randomColor={randomColor}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </StatsElement>
  );
};
