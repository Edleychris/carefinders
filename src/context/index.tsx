import { createContext, useEffect, useState } from "react";
import { queryKeys } from "../react-query/constants";
import { getLoginToken, getStoredUser, setStoredUser } from "../storage";
import { getDecodedJWT, isAuthenticated } from "../utils";
import { useAuthenticatedUser } from "./hooks";
import { useQueryClient } from "@tanstack/react-query";
import { ChildProps, userProps } from "../interface";

export const AuthContext = createContext({
  user: undefined as userProps | undefined,
  token: undefined as string | undefined,
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logout: () => {},
  updateUser: (data: userProps) => {},
  toggleDrawer: () => {},
  open: false,
});

function AuthContextProvider({ children }: ChildProps) {
  const [authToken, setAuthToken] = useState<string | undefined>(undefined);
  const [user, setUser] = useState<userProps | undefined>(undefined);
  const userDetails = useAuthenticatedUser();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      logout();
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const data = getLoginToken();
    if (data) {
      setAuthToken(data);
    }
  }, []);

  useEffect(() => {
    const data = getStoredUser();
    if (data) {
      setUser(data);
    }
  }, []);

  // console.log(userDetails, "check");

  useEffect(() => {
    if (userDetails) {
      setUser(userDetails);
    }
  }, [userDetails]);

  // consolet.log(userDetails, "user");
  function logout() {
    setUser(undefined);
    setAuthToken(undefined);
    localStorage.clear();
    queryClient.invalidateQueries(["user"]);
  }
  function updateUser(data: userProps) {
    setUser(data);
  }

  function authenticate(data: string) {
    setAuthToken(data);
    const decoded = getDecodedJWT();

    const userPropsObj: userProps = {
      id: 0,
      _id: decoded?._id || "",
      firstname: "",
      lastname: "",
      middlename: "",
      fullname: "",
      phone: "",
      email: decoded?.email || "",
      // roles: decoded?.roles || [],
    };

    setUser(userPropsObj);
    setStoredUser(userPropsObj);
  }
  function toggleDrawer() {
    setOpen(!open);
  }

  const value = {
    user: user,
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
    updateUser: updateUser,
    toggleDrawer,
    open,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
