export const UserCard = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <img src={avatar} alt={username} />
      <h2>{username}</h2>
      <p>{tag}</p>
      <p>{location}</p>
      <ul>
        <li>
          <h3>Followers</h3>
          <p>{stats.followers}</p>
        </li>
        <li>
          <h3>Views</h3>
          <p>{stats.views}</p>
        </li>
        <li>
          <h3>Likes</h3>
          <p>{stats.likes}</p>
        </li>
      </ul>
    </div>
  );
};
