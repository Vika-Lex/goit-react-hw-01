import style from './Friend.module.css';

const FriendItem = props => {
  const { name, avatar, isOnline } = props;
  const onlineStatus = isOnline ? 'Online' : 'Offline';
  const statusColor = isOnline ? style.online : style.offline;
  return (
    <>
      <div>
        <img className={style.avatar} src={avatar} alt="Avatar" width="48" />
        <p className={style.userName}>{name}</p>
        <div className={style.statusContainer}>
          <span className={`${style.status} ${statusColor}`}>{onlineStatus}</span>
        </div>
      </div>
    </>
  );
};

export default FriendItem;
