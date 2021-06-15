import {receiveUsers} from './users';
import {receiveQuestions} from './questions';
import { getInitialData} from '../utils/starter_code/api';

export const handleInitialData=()=>
{
    return async (dispatch, getState)=>
    {
        const { users, questions } = await getInitialData();
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
    }
}