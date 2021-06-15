import { saveQuestion } from "../utils/starter_code/api";
import {
  _getQuestions,
  _getUsers,
  _saveQuestionAnswer,
} from "../utils/starter_code/_DATA";
import { RECEIVE_QUESTIONS, ADD_QUESTION } from "./types";
import { receiveUsers } from "./users";

/* Recieve Questions */
export const receiveQuestions = (questions) => {
  return { type: RECEIVE_QUESTIONS, payload: questions };
};
/* Add new question */

export const addQuestion = (question) => {
  return { type: ADD_QUESTION, payload: question };
};

export const handleAddQuestion = (optionOne, optionTwo, authedUser) => {
  return async (dispatch, getState) => {
    //function formatQuestion ({ optionOneText, optionTwoText, author })
    const question = await saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    });
    const questions = await _getQuestions();
    const users = await _getUsers();
    dispatch(addQuestion(question));
    dispatch(receiveQuestions(questions));
    dispatch(receiveUsers(users));
  };
};

/* answer a question */
//export function _saveQuestionAnswer ({ authedUser, qid, answer })
export const handleAnswerQuestion = ({ authedUser, qid, answer }) => {
  return async (dispatch, getState) => {
    await _saveQuestionAnswer({
      authedUser: authedUser,
      qid: qid,
      answer: answer,
    });
    const questions = await _getQuestions();
    const users = await _getUsers();
    dispatch(receiveQuestions(questions));
    dispatch(receiveUsers(users));
  };
};
