import css from "./FriendList.module.css";

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={css.item} key={id}>
      <img className={css.photo} src={avatar} alt="Avatar" width="48" />
      <p className={name}>{name}</p>

      {isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </li>
  );
};

export default FriendListItem;
