import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchConversations,
  setCurrentConversation,
  setCurrentPost,
} from "../../redux/actions/profiles";
import { getTwilioChannel } from "../../redux/actions/twilio";
import ConversationListItem from "../ConversationListItem";
import ConversationSearch from "../ConversationSearch";

export default function TabMessageContent(props) {
  //   const conversations = useSelector((state) => state.conversations);
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.profile.conversations);
  const currentTab = useSelector((state) => state.profile.currentTab);
  const twilioUser = useSelector((state) => state.twilio.twilioUser);
  //   const conversations = [{ name: "text" }];

  const getConversations = () => {
    // console.log("in function getconversations");
    dispatch(fetchConversations());
    // setConversations([...conversations, ...newConversations]);
  };
  useEffect(
    () => {
      dispatch(setCurrentPost(null));
      getConversations();
    },
    [currentTab]
  );

  const handleClickListItem = (
    channelName,
    id,
    displayName,
    haveResponsePerson
  ) => {
    // console.log(channelName, id);
    dispatch(setCurrentConversation({ id, displayName, haveResponsePerson }));
    dispatch(getTwilioChannel(twilioUser, channelName));
  };
  return (
    <Fragment>
      <ConversationSearch />
      {conversations &&
        conversations.map((conversation) => (
          <ConversationListItem
            handleClickListItem={() =>
              handleClickListItem(
                conversation.channelName,
                conversation.id,
                conversation.displayName,
                conversation.haveResponsePerson
              )
            }
            {...conversation}
            photo={`https://media.thethao247.vn/upload/cuongnm/2020/04/28/guc-nga-truoc-nhan-sac-cua-hot-girl-bong-ro-xinh-dep-nhat-trung-quoc1588047165.jpg`}
          />
        ))}
    </Fragment>
  );
}
