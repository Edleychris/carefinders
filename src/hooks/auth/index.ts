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

import { auth, googleProvider, facebookProvider } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  // AuthError,
  UserCredential,
  getAuth, GoogleAuthProvider, sendPasswordResetEmail as firebaseSendPasswordResetEmail
} from "firebase/auth";

const SERVER_ERROR = "There was an error contacting the server.";

export const sendPasswordResetEmail = async (email: string) => {
  const auth = getAuth();
  try {
    await firebaseSendPasswordResetEmail(auth, email);
    successAlert("Password reset email sent successfully. Please check your inbox.");
  } catch (error) {
    console.error("Error sending password reset email:", error);
    errorAlert("Failed to send password reset email. Please try again.");
  }
};

export const signUpWithGoogle = async () => {
  try {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error during Google sign-up:", error);
    return null;
  }
};
export const signUpInWithGoogle = async () => {
  try {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error during Google sign-up:", error);
    return null;
  }
};

export const signUpWithEmail = async (
  email: string,
  password: string
): Promise<UserCredential | null> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.error("Error signing up with email: ", error);
    return null;
  }
};

export const signInWithEmail = async (
  email: string,
  password: string
): Promise<UserCredential | null> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    console.error("Error signing in with email: ", error);
    return null;
  }
};

export const signInWithGoogle = async (): Promise<UserCredential | null> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (error) {
    console.error("Error signing in with Google: ", error);
    return null;
  }
};

export const signInWithFacebook = async (): Promise<UserCredential | null> => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    return result;
  } catch (error) {
    console.error("Error signing in with Facebook: ", error);
    return null;
  }
};

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
    mutationFn: (formData: FormDataType) => signInWithEmail(formData.email, formData.password),
    onSuccess: (data) => {
      setLoginToken(data?.user.accessToken);
      authCtx.authenticate(data?.user.accessToken);
    },
    onError: (error: any) => {
      const err = error?.response?.data?.error
        ? error?.response?.data?.error
        : SERVER_ERROR;
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
