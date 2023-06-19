import { UserCard } from './UserCard/UserCard';
import user from 'data/user.json';

export const App = () => {
  return (
    <>
      <UserCard {...user} />
    </>
  );
};
