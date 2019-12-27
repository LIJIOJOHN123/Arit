import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  LOGOUT
} from "./typeof";
import { setAlert } from "./alert";
import setAuthToken from "../../utils/setAuth";

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  console.log(localStorage.token);
  try {
    const res = await axios.get("http://localhost:8000/api/user");
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};
export const register = ({ name, email, password }) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const body = JSON.stringify({ name, email, password });
    const res = await axios.post(
      "http://localhost:8000/api/register",
      body,
      config
    );
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    if (error) {
      const errors = error.response.data.errors;
      if (error) {
        errors.forEach(error => dispatch(setAlert(error.msg, "danager")));
      }
    }
    dispatch({ type: REGISTER_FAIL });
  }
};
export const login = formData => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8000/api/login", formData);
    dispatch({ type: LOGIN_SUCCES, payload: res.data });
  } catch (error) {
    const errors = error.response.data.errors;
    if (error) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({ type: LOGIN_FAIL });
  }
};
export const logout = () => async dispatch => {
  try {
    dispatch({ LOGOUT });
  } catch (error) {}
};
