import FriendItem from './FriendItem.jsx';
import style from './Friend.module.css';

const FriendList = props => {
  const { friends } = props;

  return (
    <div className="friend__container">
      <ul className={style.list}>
        {friends.map(({ name, id, isOnline, avatar }) => (
          <li className={style.card}>
            <FriendItem key={id} name={name} isOnline={isOnline} avatar={avatar} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
