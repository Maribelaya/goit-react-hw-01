import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={css["list-item"]}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <div className={css.item} key={id}>
          <img className={css.photo} src={avatar} alt="Avatar" width="48" />
          <p className={name}>{name}</p>

          {isOnline ? (
            <p className={css.online}>Online</p>
          ) : (
            <p className={css.offline}>Offline</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FriendList;
