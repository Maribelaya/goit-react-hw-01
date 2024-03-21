import css from "./Profile.module.css";

const Profile = ({ image, name, tag, location, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.card}>
        <img className={css.photo} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css["list-item"]}>
        <li className={css.item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
