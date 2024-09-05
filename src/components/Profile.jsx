import { useAuth } from "../context/AuthContext";
import "../styles/Profile.css"

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="profile-container">
      <h2>Profile Information</h2>
      {user ? (
        <div>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>No user information available</p>
      )}
    </div>
  );
};

export default Profile;
