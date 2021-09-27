import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Col, Form, Input, Row } from 'antd';
import Loading from '../loading/Loading';
import styles from '../login/login.module.css';

const Register = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (data, e) => {
    setLoading(true);
    axios
      .post('http://localhost:8081/users/signup', data)
      .then(async (res) => {
        localStorage.setItem('token', res.data.token);
        document.location.reload();
      })
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return loading ? (
    <Loading />
  ) : (
    <div className={styles.login}>
      <Form
        className={styles.form}
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
        autoComplete='off'
      >
        <Form.Item
          label='First Name'
          name='firstName'
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Last Name'
          name='lastName'
          rules={[
            {
              required: true,
              message: 'Please input your last name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Phone'
          name='phone'
          rules={[
            {
              required: true,
              message: 'Please input your phone!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Email'
          name='email'
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          className={styles.formControls}
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Row justify='space-between' align='middle'>
            <Col span={6}>
              <Button type='primary' htmlType='submit'>
                Register
              </Button>
            </Col>
            <Col span={15} align='end'>
              Already have an account? <Link to='/login'>Login</Link>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
