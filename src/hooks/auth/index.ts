import { axiosInstance } from "../../axios-Instance";
import { toast } from "react-toastify";
import { successAlert, toastOptions } from "../../utils";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { setLoginToken } from "../../storage";
import { useMutation } from "@tanstack/react-query";
import { LoginProps, RegisterProps } from "../../interface";
import { useAlert } from "../../context/AlertContext";
import { CreateFormDataType } from "../../modules/Auth/Register";
import { FormDataType } from "../../modules/Auth/Login";
// import { FormDataType } from "../../modules/Auth/Login";
// import { CreateFormDataType } from "../../modules/Auth/RegOld/Sindex";
// import { FormDataType } from "../../modules/Auth/LoginOld/Sindex";

const SERVER_ERROR = "There was an error contacting the server.";

async function userLogin(formData: LoginProps) {
  const data = await axiosInstance({
    url: "/auth/login",
    method: "POST",
    data: formData,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data?.data;
}

export function useLogin() {
  const authCtx = useContext(AuthContext);
  const { showAlert } = useAlert();
  const { mutate, isError, error, isSuccess, reset } = useMutation({
    mutationFn: (formData: FormDataType) => userLogin(formData as any),
    onSuccess: (data) => {
      setLoginToken(data.token);
      authCtx.authenticate(data.token);
      successAlert("Login Successful");
    },
    onError: (error: any) => {
      const err = error?.response?.data?.error
        ? error?.response?.data?.error
        : SERVER_ERROR;
      //   toast.error(err, toastOptions);
      showAlert({
        type: "error",
        title: "Ooops",
        text: err,
      });
    },
  });
  return { mutate, isError, error, isSuccess, reset };
}

async function userRegister(formData: RegisterProps) {
  try {
    const response = await axiosInstance({
      url: "/auth",
      method: "POST",
      data: {
        ...formData,
        role: "Supplier",
        requireApproval: true,
        status: "InActive",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error occurred during user registration:", error);
    throw error;
  }
}

export function useRegister() {
  const { mutate, isError, error, isSuccess, reset } = useMutation({
    mutationFn: (formData: CreateFormDataType) => userRegister(formData as any),

    onError: (error: any) => {
      const err = error?.response?.data?.error
        ? error?.response?.data?.error
        : SERVER_ERROR;
      toast.error(err, toastOptions);
    },
  });
  return { mutate, isError, error, isSuccess, reset };
}

async function forgotPassword(formData: any) {
  try {
    const data = await axiosInstance({
      url: "/auth/forgotPassword",
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data?.data;
  } catch (error) {
    console.error("Error occurred during user registration:", error);
    throw error;
  }
}

export function useForgotPassword() {
  const { mutate, isError, error, isSuccess, reset } = useMutation({
    mutationFn: (formData) => forgotPassword(formData),
    onError: (error: any) => {
      const err = error?.response?.data?.error
        ? error?.response?.data?.error
        : SERVER_ERROR;
      toast.error(err, toastOptions);
    },
  });
  return { mutate, isError, error, isSuccess, reset };
}

async function resetPassword(formData: any) {
  try {
    const data = await axiosInstance({
      url: `/auth/resetpassword/${formData["token"]}`,
      method: "PUT",
      data: formData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data?.data;
  } catch (error) {
    console.error("Error occurred during user registration:", error);
    throw error;
  }
}

export function useResetPassword() {
  const { mutate, isError, error, isSuccess, reset } = useMutation({
    mutationFn: (formData) => resetPassword(formData),
    onError: (error: any) => {
      const err = error?.response?.data?.error
        ? error?.response?.data?.error
        : SERVER_ERROR;
      toast.error(err, toastOptions);
    },
  });
  return { mutate, isError, error, isSuccess, reset };
}
