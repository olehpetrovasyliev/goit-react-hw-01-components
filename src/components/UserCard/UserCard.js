import { Card, UserSlatsElement, UserSlatsList } from './UserCardStyled';
import propTypes from 'prop-types';

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
          <span className="quantity">{stats.views}</span>
        </UserSlatsElement>
        <UserSlatsElement>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </UserSlatsElement>
      </UserSlatsList>
    </Card>
  );
};

UserCard.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.exact({
    label: propTypes.string.isRequired,
    quantity: propTypes.number.isRequired,
  }),
};
