import { GET_PROFILE, GET_PROFILES, PROFILE_ERROR } from "./typeof";
import { setAlert } from "./alert";
import axios from "axios";

//get current user profile
export const currentProfile = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:8000/api/profile");
    dispatch({ type: GET_PROFILE, payload: res.data });
    console.log(res);
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: setAlert("Please login again")
    });
  }
};
