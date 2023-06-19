import { Statistics } from './Stats/Stats';
import { UserCard } from './UserCard/UserCard';
import user from 'data/user.json';
import stats from 'data/data.json';

export const App = () => {
  return (
    <>
      <UserCard {...user} />
      <Statistics title="Statistics" statsArr={stats} />
    </>
  );
};
