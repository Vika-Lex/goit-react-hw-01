import Profile from './components/Profile/Profile.jsx';
import FriendList from './components/Friend/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';

import profile from './data/profile.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

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
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
