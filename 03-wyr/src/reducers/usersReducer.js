import { RECEIVE_USERS } from "../actions/types";

export const users = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_USERS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    
    default:
      return state;
  }
};
