import {BASE_URL} from '../config'

export const GET_QUESTION_INIT = 'GET_QUESTION_INIT';
export const getQuestionInit = (loading) =>({
  type: GET_QUESTION_INIT,
  loading
});

export const GET_QUESTION_SUCCESS = 'GET_QUESTION_INIT';
export const getQuestionSuccess = (questionList) => ({
  type: GET_QUESTION_SUCCESS,
  questionList
});

export const GET_QUESTION_ERROR = 'GET_QUESTION_ERROR';
export const getQuestionError = (error) => ({
  type: GET_QUESTION_ERROR,
  error
});


export const getQuestionList = () => (dispatch) => {
  console.log('Enter getQuestionList')
  dispatch(getQuestionInit());
  return fetch(`${BASE_URL}/polls`, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json'
    },
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
      return res.json();
  })
  .then(questions => {
    console.log("Question returned = ", questions)
    dispatch(getQuestionSuccess(questions));
  })
  .catch(err => {
    dispatch(getQuestionError(err));
  })
}