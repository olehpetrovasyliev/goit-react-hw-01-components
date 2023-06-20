// import { FriendCard } from 'components/FriendCard/FriendCard';

// export const FriendsList = friendsArr => {
//   return (
//     <ul class="friend-list">{friendsArr.map(friend => FriendCard(friend))}</ul>
//   );
// };

import { FriendCard } from 'components/FriendCard/FriendCard';
import { Friends } from './friendsStyled';

export const FriendsList = ({ friendsArr }) => {
  return (
    <Friends>
      {friendsArr.map(friend => (
        <FriendCard {...friend} />
      ))}
    </Friends>
  );
};
