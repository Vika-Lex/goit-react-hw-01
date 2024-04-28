import Profile from './components/Profile/Profile.jsx';
import FriendList from './components/Friend/FriendList.jsx';
import profile from './data/profile.json';
import friends from './data/friends.json';

const App = props => {
  return (
    <>
      <Profile
        name={profile.username}
        tag={profile.tag}
        location={profile.location}
        image={profile.avatar}
        stats={profile.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
