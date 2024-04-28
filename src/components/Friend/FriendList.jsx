import FriendItem from './FriendItem.jsx';

const FriendList = props => {
  const { friends } = props;
  console.log(friends);
  return (
    <ul>
      <li>
        {friends.map(({ name, id, isOnline, avatar }) => (
          <FriendItem key={id} name={name} isOnline={isOnline} avatar={avatar} />
        ))}
      </li>
    </ul>
  );
};

export default FriendList;
