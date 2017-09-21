import {
  SELECT_FARM,
} from './constants';

const initialState = {
  farm: '',
  points: 0,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FARM: {
      console.log('action', action);
      return {
        ...state,
        farm: action.farm,
      };
    }
    default: {
      return state;
    }
  }
};

export default gameReducer;
