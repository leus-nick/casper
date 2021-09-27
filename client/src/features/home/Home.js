import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from './homeSlice';
import Loading from '../loading/Loading';
import Nav from '../nav/Nav';

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.home.name);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  const fetchUserDetails = () => {
    axios.defaults.withCredentials = true;
    axios
      .get('http://localhost:8081/users/me', {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.firstName) {
          dispatch(setName(res.data.firstName));
          setLoading(false);
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return loading && !userName ? (
    <Loading />
  ) : (
    <div className='home'>
      <Nav />
    </div>
  );
};

export default Home;
