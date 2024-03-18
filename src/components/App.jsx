// src/App.jsx

import Profile from "./profile/Profile";
import userData from "./profile/userData.json";
import FriendList from "./friends/FriendList";
import friends from "./friends/friends.json";
import TransactionHistory from "./transaction/TransactionHistory";
import transactions from "./transaction/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
