import { Statistics } from './Stats/Stats';
import { UserCard } from './UserCard/UserCard';
import user from 'data/user.json';
import stats from 'data/data.json';
import friends from 'data/friends.json';
import { FriendsList } from './Friends/Friends';
import { Transactions } from './Transactions/Transactions';
import transList from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <UserCard {...user} />
      <Statistics title="Statistics" statsArr={stats} />
      <FriendsList friendsArr={friends} />
      <Transactions transactionsArr={transList} />
    </>
  );
};
