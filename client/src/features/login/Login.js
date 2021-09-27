import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Loading from '../loading/Loading';
import styles from './login.module.css';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post('http://localhost:8081/users/login', data)
      .then(async (res) => {
        localStorage.setItem('token', res.data.token);
        document.location.reload();
      })
      .catch((err) => console.log(err));
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
                Login
              </Button>
            </Col>
            <Col span={17} align='end'>
              Don&apos;t have an account? <Link to='/register'>Register now</Link>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
