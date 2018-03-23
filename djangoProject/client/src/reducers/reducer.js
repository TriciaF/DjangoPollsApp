import { GET_QUESTION_INIT, GET_QUESTION_SUCCESS, GET_QUESTION_ERROR } from '../actions/actions'


const initialState = {
  loading: false,
  error: null,
  questionList: []
};

export default function reducer( state = initialState, action) {
  if(action.type === GET_QUESTION_INIT) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if(action.type === GET_QUESTION_SUCCESS) {
    console.log('Enter getQuestionSucces ', action.questionList)
    return Object.assign({}, state, {
      loading: false,
      error: false,
      quesitonList: action.quesitonList.map(q => {
        return q;
      })
    });
  } else if(action.type === GET_QUESTION_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else
      return state
}