import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./index.module.css";
import { useIsMutating } from "@tanstack/react-query";
import { useLogin } from "../../../hooks/auth";
import { successAlert } from "../../../utils";
import { PrivatePaths, PublicPaths } from "../../../routes/path";
import { Button, Checkbox, Form, Input } from 'antd';
import type { FormProps } from 'antd';

type FieldType = {
  email?: string;
  password?: string;
  remember?: boolean;
};

export type FormDataType = {
  email: string;
  password: string;
  [key: string]: string | boolean;
};

const Login = () => {
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { mutate, isSuccess, isError, reset } = useLogin();
  
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    setFormData(values);
    mutate(values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (isError) {
    reset();
  }

  if (isSuccess) {
    reset();
    successAlert("Login Successful");
    setFormData({ email: "", password: "" });
    navigate(PrivatePaths.DASHBOARD);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Login</h1>
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, display: 'flex', flexDirection: 'column', alignItems:'right' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off" className={styles.form}
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <div className={styles.form_footer}>
            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
              <Link to={PublicPaths.FORGOT_PASSWORD} className={styles.forgotPassword}>
                Forgot password?
              </Link>
            </Form.Item>
          </div>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <Button type="primary" htmlType="submit" style={{width: '100%', justifyContent: 'center'}}>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <div className={styles.optional}>
          <p>Don't have an account?</p>
          <p>
            <Link to={PublicPaths.REGISTER}>
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
