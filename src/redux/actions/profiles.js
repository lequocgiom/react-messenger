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
} from "./types";
import com from "../../utils";
import Axios from "axios";

export const fetchConversations = () => async (dispatch) => {
  //   console.log("fetch conversation actions");
  try {
    const res = await Axios.get(`${com.root}/api/v1/conversation:fetchAll`);
    // console.log(res);
    let newConversations = res.data.data.map((item) => {
      return {
        id: item.id,
        name: `${item.nameConversation}`,
        channelName: `CHATBOX_${item.id}`,
        data: `${item.nameConversation}`,
        clientId: item.id,
        userId: item.client.user.id,
        displayName: item.client.user.displayName,
        haveResponsePerson: item.haveResponsePerson,
      };
    });
    dispatch({
      type: FETCH_CONVERSATION,
      payload: newConversations,
    });
  } catch (err) {
    dispatch({
      type: FETCH_CONVERSATION_ERROR,
      payload: err,
    });
  }
};

export const setCurrentConversation = (payload) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_CONVERSATION,
    payload: payload,
  });
};

export const fetchPostFanpage = () => async (dispatch) => {
  //   console.log("fetch conversation actions");
  try {
    const res = await Axios.get(`${com.root}/api/v1/fetchAllPostInFanPage`);
    // console.log(res);
    dispatch({
      type: FETCH_POST_FANPAGE,
      payload: res.data.data.feed.data
        .filter((post) => post.message || post.story)
        .map((post) => ({
          id: post.id,
          name: post.message || post.story,
        })),
    });
  } catch (err) {
    dispatch({
      type: FETCH_POST_FANPAGE_ERROR,
      payload: err,
    });
  }
};

export const setCurrentTab = (id) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_TAB,
    payload: id,
  });
};

export const setCurrentPost = (id) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_POST,
    payload: id,
  });
};

export const fetchCommentByPost = (id) => async (dispatch) => {
  //   console.log("fetch conversation actions");
  try {
    const res = await Axios.get(
      `${com.root}/api/v1/fetchAllCommentByPost/${id}`
    );
    // console.log(res);
    dispatch({
      type: FETCH_COMMENT_BYPOST,
      payload: res.data.comment.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_COMMENT_BYPOST_ERROR,
      payload: err,
    });
  }
};
