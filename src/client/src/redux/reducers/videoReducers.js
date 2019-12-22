import { FETCH_VIDEOS } from "../actions/typeof";
const intialValue = {
  data: []
};

export const videoReducer = (state = intialValue, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      console.log({ ...state, data: action.payload });
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
