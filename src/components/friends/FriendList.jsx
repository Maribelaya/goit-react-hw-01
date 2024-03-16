function FriendList({ friends }) {
  return (
    <div>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <div key={id}>
          <img src={avatar} alt="Avatar" width="48" />
          <p>{name}</p>
          {isOnline ? <p>Online</p> : <p>Offline</p>}
        </div>
      ))}
    </div>
  );
}

export default FriendList;
