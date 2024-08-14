import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
// import { Button, FormGroup, Input, PasswordInput } from "../../../components";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BsExclamation } from "react-icons/bs";
// import Radio from "../../../components/Forms/Radio";
import styles from "./index.module.css";
import { useIsMutating } from "@tanstack/react-query";
import { useRegister } from "../../../hooks/auth";
import { errorAlert, successAlert } from "../../../utils";

export type CreateFormDataType = {
  firstname: string;
  lastname: string;
  businesslocation: string;
  businessname: string;
  workemail: string;
  password: string;
  receiveMarketing: boolean;
  agreeTerms: boolean;
  [key: string]: string | boolean;
};

type ErrorsType = {
  [key: string]: string;
};

const Register = () => {
  // const [email, setEmail] = useState<string>('');
  // const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const isLoading = useIsMutating();
  const [formData, setFormData] = useState<CreateFormDataType>({
    firstname: "",
    lastname: "",
    businesslocation: "",
    businessname: "",
    workemail: "",
    password: "",
    receiveMarketing: false,
    agreeTerms: false,
  });
  const [errors, setErrors] = useState<ErrorsType>({});
  const handleSubmit = () => {
    console.log("submit");
  };

  // const handleChange = (name: string, value: string | boolean) => {
  //   if (typeof value === 'string') {
  //     setEmail(value);
  //   }
  // };

  // const validationHandler = (name: string, error: string) => {
  //   setErrors(prevErrors => ({
  //     ...prevErrors,
  //     [name]: error
  //   }));

  const handleChange = (name: string, value: string | boolean) => {
    setFormData({ ...formData, [name]: value });
  };

  const validationHandler = (name: string, error: string) => {
    setErrors({ ...errors, [name]: error });
  };

  const { mutate, isSuccess, error, isError, reset } = useRegister();

  if (isError) {
    reset();
    errorAlert(error);
  }
  if (isSuccess) {
    reset();
    successAlert(
      "Registration Successful, Please check your email for next steps"
    );
    setFormData({
      firstname: "",
      lastname: "",
      businesslocation: "",
      businessname: "",
      workemail: "",
      password: "",
      receiveMarketing: false,
      agreeTerms: false,
    });
  }

  const submitHandler = () => {
    mutate(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={logo} alt="logo" className={styles.logo} />
        {/* <FormGroup
          onSubmit={submitHandler}
          validation={formData}
          setErrors={setErrors}
          errors={errors}
        >
          <div className={styles.head}>
            <h1 className="title">Create your AP account</h1>
            <div className={styles.formFields}>
              <div className={styles.formTwo}>
                <Input
                  label=""
                  name="firstname"
                  placeholder="First name"
                  value={formData.firstname}
                  error={errors.firstname}
                  type="text"
                  onChange={handleChange}
                  validationHandler={validationHandler}
                  className={styles.inputField}
                  // labelClassName={styles.inputLabel}
                />
                <Input
                  label=""
                  name="lastname"
                  placeholder="Last name"
                  value={formData.lastname}
                  error={errors.lastname}
                  type="text"
                  onChange={handleChange}
                  validationHandler={validationHandler}
                  className={styles.inputField}
                  // labelClassName={styles.inputLabel}
                />
              </div>
              <Input
                label=""
                name="businesslocation"
                placeholder="Business location"
                value={formData.businesslocation}
                error={errors.businesslocation}
                type="text"
                onChange={handleChange}
                validationHandler={validationHandler}
                className={styles.inputField}
                labelClassName={styles.inputLabel}
              />
              <Input
                label=""
                name="businessname"
                placeholder="Business name"
                value={formData.businessname}
                error={errors.businessname}
                type="text"
                onChange={handleChange}
                validationHandler={validationHandler}
                className={styles.inputField}
                labelClassName={styles.inputLabel}
              />
              <p className={styles.warning}>
                <span>
                  <BsExclamation />
                </span>
                For registered businesses, use your registered business name.
              </p>
              <Input
                label=""
                name="workemail"
                placeholder="Work email"
                value={formData.workemail}
                error={errors.workemail}
                type="email"
                onChange={handleChange}
                validationHandler={validationHandler}
                className={styles.inputField}
                labelClassName={styles.inputLabel}
              />
              <PasswordInput
                label=""
                name="password"
                placeholder="Choose a password"
                value={formData.password}
                error={errors.password}
                type="password"
                validationHandler={validationHandler}
                onChange={handleChange}
                className={styles.inputField}
                labelClassName={styles.inputLabel}
              />
              <div className={styles.checkBoxGroup}>
                <label className={styles.checkBoxLabel}>
                  <input
                    type="checkbox"
                    name="receiveMarketing"
                    checked={formData.receiveMarketing}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.checked)
                    }
                  />
                  Receive marketing emails and communications about our products
                </label>
                <label className={styles.checkBoxLabel}>
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.checked)
                    }
                    required
                  />
                  I agree to AP's Terms of use and consent to AP's privacy
                  policy
                </label>
              </div>
            </div>
            <Button
              title={"Create my account"}
              className={styles.submitButton}
              loading={isLoading === 1}
              disabled={isLoading === 1}
            />
          </div>
        </FormGroup> */}
        <div className={styles.formFoot}>
          <p>Have an account?</p>
          <Link to={"/"} className={styles.signinLink}>
            Sign In <IoIosArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
