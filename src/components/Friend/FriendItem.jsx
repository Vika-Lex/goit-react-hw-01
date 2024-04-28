import style from './Friend.module.css';

const FriendItem = props => {
  const { name, avatar, isOnline } = props;
  const isFriendOnline = isOnline ? style.online : style.offline;
  return (
    <>
      <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <span className={`${style.status} ${isFriendOnline}`}></span>
      </div>
    </>
  );
};

export default FriendItem;
