import {
  FETCH_CONVERSATION,
  FETCH_CONVERSATION_ERROR,
  SET_CURRENT_CONVERSATION,
  FETCH_POST_FANPAGE,
  FETCH_POST_FANPAGE_ERROR,
  SET_CURRENT_TAB,
  SET_CURRENT_POST,
  FETCH_COMMENT_BYPOST,
  FETCH_COMMENT_BYPOST_ERROR,
} from "../actions/types";

const initialState = {
  conversations: [],
  loading: true,
  currentConversation: null,
  currentDisplayName: null,
  posts: [],
  error: null,
  currentTab: 2,
  currentPost: null,
  comments: [],
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
    case FETCH_CONVERSATION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case SET_CURRENT_CONVERSATION:
      return {
        ...state,
        currentConversation: payload.id,
        currentDisplayName: payload.displayName,
      };
    case SET_CURRENT_TAB:
      return {
        ...state,
        currentTab: payload,
      };
    case FETCH_POST_FANPAGE:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case FETCH_POST_FANPAGE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: payload,
      };
    case FETCH_COMMENT_BYPOST:
      return {
        ...state,
        comments: payload,
        loading: false,
      };
    case FETCH_COMMENT_BYPOST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
