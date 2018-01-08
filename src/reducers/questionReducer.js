import { START_GAME, NEXT_QUESTION, END_GAME } from '../actions/ActionTypes'

const initialState = {
  game: {
    region: null,
    currentQuestion: 0,
    numOfQuestions: 10,
    correctAnswers: 0
  }
};


const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return null;
    case NEXT_QUESTION:
      return null;
    case END_GAME:
      return null;
    default:
      return state;
  }
};

export default questionReducer;
