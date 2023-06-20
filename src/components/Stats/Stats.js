import { StatsComponent } from 'components/StatsComponent/StatsComponent';
import { Stats } from './StatsStyled';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, statsArr }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <Stats>
        {statsArr.map(item => (
          <StatsComponent {...item} randomColor={getRandomHexColor()} />
        ))}
      </Stats>
    </section>
  );
};
