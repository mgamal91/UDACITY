import { SET_AUTHED_USER, LOG_OUT_USER } from "./types";

export const setAuthedUser = (id) => {
  return { type: SET_AUTHED_USER, payload: id };
};

export const handleLogOut = () => {
  return { type: LOG_OUT_USER };
};
