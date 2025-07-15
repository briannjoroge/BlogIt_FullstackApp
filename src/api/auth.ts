import axios from "axios";
import { domain } from "./utils";

export const registerUser = async (userData: {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await axios.post(`${domain}/api/auth/register`, userData);
    return res.data;
  } catch {
    throw new Error("Registration failed");
  }
};

export const loginUser = async (credentials: {
  loginCredentials: string;
  password: string;
}) => {
  try {
    const res = await axios.post(`${domain}api/auth/login`, credentials);
    return res.data;
  } catch {
    throw new Error("Login failed");
  }
};
