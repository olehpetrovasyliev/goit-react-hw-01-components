import { Friend } from 'components/Friends/friendsStyled';

export const FriendCard = ({ avatar, name, isOnline, id }) => {
  return (
    <Friend className="item" key={id}>
      <span className="status">{isOnline ? 'Online' : 'Offline'}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Friend>
  );
};
