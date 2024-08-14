import React, { useState } from "react";
// import { Button, FormGroup, PasswordInput } from "../../../components";
import logo from "../../../assets/logo.svg";
// import Input from "../../../components/Forms/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./index.module.css";
// import "./login.css";
import { useIsMutating } from "@tanstack/react-query";
import { useLogin } from "../../../hooks/auth";
import { successAlert } from "../../../utils";
import { PrivatePaths } from "../../../routes/path";

export type FormDataType = {
  email: string;
  password: string;
  [key: string]: string | boolean;
};

const Login = () => {
  type ErrorsType = {
    [key: string]: string;
  };

  ///
  const isLoading = useIsMutating();
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ErrorsType>({});
  const navigate = useNavigate();

  const handleChange = (name: string, value: string | boolean) => {
    setFormData({ ...formData, [name]: value });
  };

  const validationHandler = (name: string, error: string) => {
    setErrors({ ...errors, [name]: error });
  };

  const { mutate, isSuccess, isError, error, reset } = useLogin();
  if (isError) {
    reset();
  }
  if (isSuccess) {
    reset();
    successAlert("Login Successful");
    setFormData({ email: "", password: "" });
    navigate(PrivatePaths.DASHBOARD);
  }
  const submitHandler = () => {
    mutate(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={logo} alt="logo" style={{ width: "64px", height: "63px" }} />
        {/* <FormGroup
          onSubmit={submitHandler}
          validation={formData}
          setErrors={setErrors}
          errors={errors}
        >
          <div className={styles.forms}>
            <div className={styles.head}>
              <h1>Sign In</h1>
              <p>Sign in to continue your dashboard</p>
            </div>
            <Input
              label=""
              name="email"
              value={formData["email"]}
              type="email"
              onChange={handleChange}
              validationHandler={validationHandler}
              required={true}
              placeholder="Email"
              className={styles.inputField}
              labelClassName={styles.inputLabel}
            />
            <div className={styles.resetDiv}>
              <PasswordInput
                label=""
                name="password"
                value={formData["password"]}
                validationHandler={validationHandler}
                onChange={handleChange}
                required={true}
                placeholder="Password"
                className={styles.inputField}
                labelClassName={styles.inputLabel}
              />
              <Link
                style={{
                  fontWeight: 400,
                  fontSize: "10px",
                  color: "#850075",
                  marginTop: "10px",
                }}
                to={"reset-password/:id"}
              >
                Reset Password
              </Link>
            </div>

            <Button
              title={"Sign in"}
              loading={isLoading === 1}
              disabled={isLoading === 1}
              className={styles.loginBtn}
            />
          </div>
        </FormGroup> */}
        <div className={styles.formFoot}>
          <p>New to AP?</p>
          <Link
            style={{ color: "#850075", display: "flex", alignItems: "center" }}
            to={"/create-account"}
          >
            Create account <IoIosArrowForward />
          </Link>
        </div>
      </div>
      <div className={styles.logFooter}>
        <Link to={"/"}>AP</Link>
        <span>.</span>
        <Link to={"/"}>Contact us</Link>
        <span>.</span>
        <Link to={"/"}>API Docs</Link>
      </div>
    </div>
  );
};

export default Login;
