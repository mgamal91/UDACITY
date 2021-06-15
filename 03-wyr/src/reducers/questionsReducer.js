import { RECEIVE_QUESTIONS, ADD_QUESTION} from "../actions/types";

export const questions = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS: {
      return { ...state, ...action.payload };
    }
    case ADD_QUESTION:
      {
        const question=action.payload;
        return {...state, [question.id]:question};
      }
    default:
      return state;
  }
};
