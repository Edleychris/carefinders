import {jwtDecode }from "jwt-decode";
import { toast } from "react-toastify";
import { getLoginToken } from "../storage";
import { IDecodedUser } from "../interface";

const SERVER_ERROR = "There was an error contacting the server.";

export const getDecodedJWT = () => {
  try {
    const token = getLoginToken();
    const decoded = jwtDecode<IDecodedUser>(token);
    return decoded;
  } catch (e) {
    return null;
  }
};

export const isAuthenticated = () => {
  try {
    const decode = getDecodedJWT();
    if (decode) {
      const { exp } = decode;
      const currentTime = Date.now() / 1000;
      return exp > currentTime;
    }
    return false;
  } catch (e) {
    return false;
  }
};

export const toastOptions = {
    //@ts-ignore
  position: toast.POSITION.TOP_RIGHT,
  // autoClose: 8000,
  draggable: true,
  //   theme: "dark",
  // timeOut: 8000,
  pauseOnHover: true,
  style: {
    zIndex: "9999",
  },
};

export const successAlert = (msg: string) => {
  toast.success(msg || "Successfully created", toastOptions);
};
export const errorAlert = (error: any) => {
  const err =
    error?.response?.data?.message ||
    error?.response?.data?.msg ||
    error?.response?.data?.error
      ? error?.response?.data?.message ||
        error?.response?.data?.msg ||
        error?.response?.data?.error
      : SERVER_ERROR;
  return err;
};
export const infoAlert = (msg: string) => {
  toast.info(msg || "Info Notification !", toastOptions);
};
