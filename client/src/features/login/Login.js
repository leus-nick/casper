import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const token = localStorage.getItem('token');

  const onSubmit = (data, e) => {
    axios
      .post('http://localhost:8081/users/login', data)
      .then(async (res) => {
        localStorage.setItem('token', res.data.token);
        document.location.reload();
      })
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='userEmail'>
          Your email
          <input id='userEmail' {...register('email', { required: true })} />
          {errors.email && <span>Please, enter your email.</span>}
        </label>

        <label htmlFor='userPassword'>
          Your password
          <input id='userPassword' {...register('password', { required: true })} />
          {errors.password && <span>Please, enter your password.</span>}
        </label>

        <input type='submit' />
      </form>
      <Link to='/register'>Don&apos;t have an account?</Link>
      {token && <h2>{token}</h2>}
    </div>
  );
};

export default Login;
