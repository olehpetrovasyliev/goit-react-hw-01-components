export const StatsComponent = ({ id, label, percentage }) => {
  return (
    <li key={id} class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  );
};
