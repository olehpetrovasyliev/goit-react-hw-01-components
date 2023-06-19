import { StatsComponent } from 'components/StatsComponent/StatsComponent';

export const Statistics = ({ title, statsArr }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">{statsArr.map(item => StatsComponent(item))}</ul>
    </section>
  );
};
