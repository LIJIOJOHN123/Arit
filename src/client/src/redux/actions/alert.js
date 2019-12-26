import { SET_ALERT, REMOVE_ALERT } from "./typeof";

export const setAlert = (msg, alertType) => dispatch => {
  const id = Math.floor(Math.random() * 1000);
  dispatch({ type: SET_ALERT, payload: { id, msg, alertType } });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 2000);
};
