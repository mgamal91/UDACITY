import { SET_AUTHED_USER, LOG_OUT_USER } from "../actions/types";

export const authedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER: {
      return action.payload;
    }
    case LOG_OUT_USER: {
      return (state = null);
    }
    default:
      return state;
  }
};
