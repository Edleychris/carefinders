import React from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import type { FormProps } from 'antd';
import { errorAlert, successAlert } from "../../../utils";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import styles from "../Login/index.module.css";
import { useNavigate } from "react-router-dom";
import { PublicPaths } from "../../../routes/path";

const Forgot = () => {
  type FieldType = {
    email?: string;
  };
  const navigate = useNavigate();
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, values.email!);
      successAlert("Password reset email sent successfully. Please check your inbox.");
      navigate(PublicPaths.LOGIN);
    } catch (error) {
      errorAlert("Failed to send password reset email. Please try again.");
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.title}>
        <h1>Forgot Password</h1>
      </div>
      <div style={{textAlign: 'center', marginBottom: '25px', fontSize: '14px'}}>
        <p>Enter your email and a link will be sent to you to create a new password.</p>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, display: 'flex', flexDirection: 'column', alignItems: 'right' }}
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
        <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <Button type="primary" htmlType="submit" style={{ width: '100%', justifyContent: 'center' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>;
};

export default Forgot;
