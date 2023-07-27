import { FETCH_DATA, POST_DATA } from "./Constants";

const Reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, getData: action.data };
    case POST_DATA:
      return { ...state, postData: action.data };
    default:
      return state;
  }
};

export default Reducer;
