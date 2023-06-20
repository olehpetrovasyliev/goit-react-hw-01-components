import { Card, UserSlatsElement, UserSlatsList } from './UserCardStyled';

export const UserCard = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <img src={avatar} alt="User avatar" class="avatar" />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
      <UserSlatsList className="stats">
        <UserSlatsElement>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </UserSlatsElement>
        <UserSlatsElement>
          <span className="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </UserSlatsElement>
        <UserSlatsElement>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </UserSlatsElement>
      </UserSlatsList>
    </Card>
  );
};
