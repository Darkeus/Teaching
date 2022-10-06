import axios from 'axios'
import { isExpired, decodeToken } from "react-jwt";
import instance from "interceptors.js"


export function login(email, password) {
  return instance
    .post("api/token", {email, password })
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem("token-access", response.data.access);
        localStorage.setItem("token-refresh", response.data.refresh);
      }
      return response.data;
    });
}

export function signUp(username, email, password) {
  return instance
    .post("register", { "username": username, "email": email, "password": password })
}

export function logout() {
  console.log("logout");
  localStorage.removeItem("token-access");
  localStorage.removeItem("token-refresh");
}