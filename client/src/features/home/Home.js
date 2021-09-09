import React from 'react';
import axios from 'axios';

const Home = () => {
  const token = localStorage.getItem('token');

  const handleLogout = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .get('http://localhost:8081/users/logout', {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        localStorage.removeItem('token');
        document.location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Home</h1>
      <button type='submit' onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Home;
