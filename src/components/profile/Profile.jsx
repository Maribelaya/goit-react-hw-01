// // src/components/Profile.jsx

const Profile = ({ name, location, stats }) => {
  return (
    <div>
      <div>
        <img src="{avatar}" alt={name} />
        <p>{name}</p>
        <p>@pmarica</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
