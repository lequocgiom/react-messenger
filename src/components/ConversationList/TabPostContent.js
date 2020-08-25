import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostFanpage,
  setCurrentPost,
  setCurrentConversation,
  setCurrentType,
} from "../../redux/actions/profiles";
import ConversationListItem from "../ConversationListItem";
import {
  FETCH_TWILIO_MESSAGES,
  GET_TWILIO_CHANNEL,
} from "../../redux/actions/types";

export default function TabPostContent(props) {
  //   const conversations = useSelector((state) => state.conversations);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.profile.posts);
  const currentTab = useSelector((state) => state.profile.currentTab);
  //   const conversations = [{ name: "text" }];

  useEffect(
    () => {
      dispatch(
        setCurrentConversation({
          id: null,
          displayName: null,
          haveResponsePerson: false,
        })
      );
      dispatch(setCurrentPost(null));
      dispatch(setCurrentType(null));
      dispatch({
        type: FETCH_TWILIO_MESSAGES,
        payload: [],
      });
      dispatch({
        type: GET_TWILIO_CHANNEL,
        payload: null,
      });
      getPostFanpage();
    },
    [currentTab]
  );

  const getPostFanpage = () => {
    console.log("in function getPostFanpage");
    dispatch(fetchPostFanpage());
    // setConversations([...conversations, ...newConversations]);
  };

  const handleClickListItem = (id) => {
    console.log(id);
    dispatch(setCurrentPost(id));
  };
  return (
    <Fragment>
      {/* <ConversationSearch /> */}
      {posts &&
        posts.map((post) => (
          <ConversationListItem
            handleClickListItem={() => handleClickListItem(post.id)}
            {...post}
            photo={`logo_user.jpg`}
          />
        ))}
    </Fragment>
  );
}
