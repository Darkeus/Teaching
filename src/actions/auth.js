import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "actions/types";
import { signUp, login, logout } from "authHelpers"
import { isExpired, decodeToken } from "react-jwt";
import { useCallback } from "react";
export const register = (username, email, password) => (dispatch) => {
  return signUp(username, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
      dispatch({
        type: SET_MESSAGE,
        // payload: response.data.message,
      });
      dispatch(signIn(email, password));
      return Promise.resolve();
    },
    (error) => {
      const message = error.response.data.email || error.response.data.password || error.response.data.username
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  )
};
export const signIn = (email, password) => (dispatch) => {
  return login(email, password).then(
    (response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { "email": decodeToken(localStorage.getItem("token-access"))["email"], "user_id": decodeToken(localStorage.getItem("token-access"))["user_id"] }
      });
      dispatch({
        type: SET_MESSAGE,
        // payload: response.data.message,
      });
      return Promise.resolve();
    },
    (error) => {
      const message = error.response.data.detail
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const logOut = () => (dispatch) => {
  logout();
  dispatch({
    type: LOGOUT,
  });
};