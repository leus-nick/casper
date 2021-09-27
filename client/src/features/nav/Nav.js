import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import axios from 'axios';
import styles from './nav.module.css';

const Nav = () => {
  const token = localStorage.getItem('token');
  const name = useSelector((state) => state.home.name);

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

  const menu = (
    <Menu>
      <Menu.Item key='0'>Settings</Menu.Item>
      <Menu.Item key='1'>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <a onClick={(e) => handleLogout(e)}>Logout</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.navWrapper}>
      <div className={styles.logo} />
      <div className={styles.nav}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/schedule'>Schedule</Link>
          </li>
          <li>
            <Link to='/homework'>Homework</Link>
          </li>
          <li className={styles.alignedItem}>
            <Dropdown overlay={menu} trigger={['click']}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
                {name} <DownOutlined />
              </a>
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
