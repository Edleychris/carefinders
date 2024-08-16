import { ChildProps } from "../interface";

const AuthGuard = ({ children }: ChildProps) => {
  return <>{children}</>;
};

export default AuthGuard;
