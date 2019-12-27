import { GET_PROFILE, PROFILE_ERROR, GET_PROFILES } from "../actions/typeof";

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {}
};
export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
};
