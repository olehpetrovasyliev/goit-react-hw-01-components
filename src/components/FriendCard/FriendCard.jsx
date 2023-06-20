export const FriendCard = ({ avatar, name, isOnline, id }) => {
  return (
    <li class="item" key={id}>
      <span class="status">{isOnline ? 'Online' : 'Offline'}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
