import { FETCH_CONVERSATION } from "../actions/types";

const initialState = {
  conversations: [],
  loading: true,
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CONVERSATION:
      return {
        ...state,
        conversations: payload,
        loading: false,
      };
    default:
      return state;
  }
}
