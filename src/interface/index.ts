export interface ChildProps {
    children: JSX.Element[] | JSX.Element;
  }
  export interface userProps {
    id: number;
    _id: string;
    firstname: string;
    lastname: string;
    middlename: string;
    fullname: string;
    phone: string;
    email: string;
    role?: string;
    birthday?: string;
    gender?: string;
    image?: any;
    // roles: string[];
  }
  
  export interface IDecodedUser {
    email: string;
    exp: number;
    iat: number;
    jti?: string;
    phone: string;
    role: string;
    token_type?: string;
    _id: string;
    fullname?: string;
  }

  export interface NavigationProps {
    name: string;
    role: string;
    user: User;
    style?: any;
  }
  
  export interface User {
    firstname: string;
    id: number;
    // roles: Role[];
  }
  
  export interface LoginProps {
    email: string;
    password: string;
  }
  
  export interface LayoutProps {
    name: string;
    pageTitle: string;
    children: JSX.Element[] | JSX.Element;
  }
  
  export interface UserLayoutProps {
    children: JSX.Element[] | JSX.Element;
    headerText: string;
  }
  
  export interface RegisterProps {
    email: string;
    password: string;
    confirmPassword: string;
    firstname: string;
    lastname: string;
    phone: string;
  }

  export interface Role {
    roleType: string;
  }
  
  export interface ChildLink {
    route: string;
    name: string;
    Icon: React.ComponentType;
    allowed: string;
  }
  
  export interface AdminLink {
    route?: string;
    name: string;
    Icon: React.ComponentType;
    allowed: string;
    children?: ChildLink[];
  }
  
  export interface UserLinksProps {
    name: string;
    roles: string;
  }

  export interface HospitalType {
    name: string;
    address: string;
    phone?: string;
  }
  