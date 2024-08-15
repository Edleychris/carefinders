import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import googleIcon from "../../../assets/google_logo.png";
import facebookIcon from "../../../assets/facebook_icon.png"
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BsExclamation } from "react-icons/bs";
import { useIsMutating } from "@tanstack/react-query";
import { Button, Checkbox, Form, Input } from 'antd';
import { useRegister, signUpWithEmail, signUpWithGoogle } from "../../../hooks/auth";
import { errorAlert, successAlert } from "../../../utils";
import type { FormProps } from 'antd';
import styles from "../Login/index.module.css";
import { PublicPaths } from "../../../routes/path";

type FieldType = {
  email?: string;
  password?: string;
  confirm?: string;
};

export type CreateFormDataType = {
  email: string;
  password: string;
};

type ErrorsType = {
  [key: string]: string;
};

const Register = () => {
  const isLoading = useIsMutating();
  const [formData, setFormData] = useState<CreateFormDataType>({
    email: "",
    password: '',
  });
  const [errors, setErrors] = useState<ErrorsType>({});

  const { mutate, isSuccess, error, isError, reset } = useRegister();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const user = await signUpWithEmail(values.email!, values.password!);
    if (user) {
      successAlert("Registration Successful, Please check your email for next steps");
      setFormData({ email: "", password: "" });
    } else {
      errorAlert("Failed to sign up with Firebase");
    }
  };
  const navigate = useNavigate();

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleGoogleSignUp = async () => {
    const user = await signUpWithGoogle();
    if (user) {
      navigate(PublicPaths.LOGIN)
      successAlert("Google sign-in successful, Please check your email for next steps");
    } else {
      errorAlert("Failed to sign in with Google");
    }
  };

  if (isError) {
    reset();
    errorAlert(error);
  }
  if (isSuccess) {
    reset();
    navigate(PublicPaths.LOGIN)
    successAlert(
      "Registration Successful, Please check your email for next steps"
    );
    setFormData({
      email: "",
      password: "",
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Sign Up</h1>
        </div>
        {/* <div style={{textAlign: 'center', fontSize:'14px'}}>
          <p>with</p>
        </div> */}
        <div className={styles.socials}>
          <p onClick={handleGoogleSignUp} style={{ cursor: 'pointer', width: '40px', height: '30px' }}><img src={googleIcon} alt="Google" style={{ width: '100%' }} /></p> <p>--</p>
          <p style={{ cursor: 'pointer', width: '40px', height: '30px' }}><img src={facebookIcon} alt="" style={{ width: '100%' }} /></p>
        </div>
        <div style={{ textAlign: 'center', fontSize: '14px', marginBottom: "20px" }}>
          <p>or</p>
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, display: 'flex', flexDirection: 'column', alignItems: 'right', }}
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

          <Form.Item<FieldType>
            label="Confirm Password"
            name="confirm"
            rules={[{ required: true, message: 'Please confirm your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16, }} style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: '5px' }}>
            <Button type="primary" htmlType="submit" style={{ width: '100%', justifyContent: 'center' }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <div className={styles.optional}>
          <p>Already have an account?</p> <p><Link to={PublicPaths.LOGIN}>
            SignIn
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
