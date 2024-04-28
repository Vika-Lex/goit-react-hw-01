import FriendList from '../Friend/FriendList.jsx';
import style from './Profile.module.css';

const Profile = props => {
  const { name, stats, tag, location, image } = props;
  return (
    <div className="profile__container">
      <div className={style.card}>
        <div className={style.cardHeader}>
          <img className={style.logo} src={image} alt="User avatar" />
          <p className={style.name}>{name}</p>
          <p className={style.tag}>{tag}</p>
          <p className={style.location}>{location}</p>
        </div>

        <ul className={style.cardStats}>
          <li>
            <span>Followers</span>
            <span className={style.text}>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span className={style.text}>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span className={style.text}> {stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
