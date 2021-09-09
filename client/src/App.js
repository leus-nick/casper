import React, { useCallback, useEffect } from 'react';
import axios from 'axios';
import Router from './features/router/Router';

function App() {
  axios.defaults.withCredentials = true;

  const refresh = useCallback(() => {
    axios
      .post(
        'http://localhost:8081/users/refreshToken',
        {},
        { withCredentials: true, headers: { 'Content-Type': 'application/json' } },
      )
      .then((res) => {
        localStorage.setItem('token', res.data.token);
      })
      .catch((err) => console.log(err));
    setTimeout(refresh, 5 * 60 * 1000);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <div className='app'>
      <Router />
    </div>
  );
}

export default App;
