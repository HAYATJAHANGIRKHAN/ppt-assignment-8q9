import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const UserFinder = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error(error);
      setUserData(null);
    }
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUserData();
  };

  return (
    <div>
      <h1>Github User Finder</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleInputChange} placeholder="Enter a GitHub username" />
        <button type="submit">Search</button>
      </form>
      {userData && (
        <div>
          <img src={userData.avatar_url} alt="User Avatar" />
          <h2>{userData.name}</h2>
        </div>
      )}
    </div>
  );
};


export default UserFinder;
