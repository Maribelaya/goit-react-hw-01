const FriendList = () => {
  const friends = [];
  return (
    <div>
      {friends.map((name, isOnline) => (
        <p key={friends.id}>
          <img src="{avatar}" alt="Avatar" width="48" />
          <p>{name}</p>
          <p>{isOnline}</p>
        </p>
      ))}
    </div>
  );
};

export default FriendList;
