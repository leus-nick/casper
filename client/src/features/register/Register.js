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
    <div className='register'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='userFirstName'>
          Your first name
          <input id='userFirstName' {...register('firstName', { required: true })} />
          {errors.firstName && <span>Please, enter your first name.</span>}
        </label>

        <label htmlFor='userLastName'>
          Your last name
          <input id='userLastName' {...register('lastName', { required: true })} />
          {errors.lastName && <span>Please, enter your last name.</span>}
        </label>

        <label htmlFor='userPhone'>
          Your phone
          <input id='userPhone' {...register('phone', { required: true })} />
          {errors.phone && <span>Please, enter your phone.</span>}
        </label>

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

        <label htmlFor='userConfirmedPassword'>
          Confirm your password
          <input id='userConfirmedPassword' {...register('confirmedPassword', { required: true })} />
          {errors.confirmedPassword && <span>Please, confirm your password.</span>}
        </label>

        <input type='submit' />
      </form>
      <Link to='/login'>Already have an account?</Link>
    </div>
  );
}