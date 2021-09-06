import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
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
    </div>
  );
}
