import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchConversations,
  setCurrentConversation,
} from "../../redux/actions/profiles";
import { getTwilioChannel } from "../../redux/actions/twilio";
import ConversationListItem from "../ConversationListItem";
import ConversationSearch from "../ConversationSearch";

export default function TabMessageContent(props) {
  //   const conversations = useSelector((state) => state.conversations);
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.profile.conversations);
  const twilioUser = useSelector((state) => state.twilio.twilioUser);
  //   const conversations = [{ name: "text" }];

  const getConversations = () => {
    // console.log("in function getconversations");
    dispatch(fetchConversations());
    // setConversations([...conversations, ...newConversations]);
  };
  useEffect(() => {
    getConversations();
  }, []);

  const handleClickListItem = (channelName, id, displayName) => {
    console.log(channelName, id);
    dispatch(setCurrentConversation({ id, displayName }));
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
                conversation.displayName
              )
            }
            {...conversation}
            photo={`https://media.thethao247.vn/upload/cuongnm/2020/04/28/guc-nga-truoc-nhan-sac-cua-hot-girl-bong-ro-xinh-dep-nhat-trung-quoc1588047165.jpg`}
          />
        ))}
    </Fragment>
  );
}
