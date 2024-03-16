import FriendListItem from "./FriendListItem";

const FriendList = () => {
  const friends = [];
  return (
    <div>
      {friends.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            img={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        );
      })}
    </div>
  );
};
export default FriendList;
