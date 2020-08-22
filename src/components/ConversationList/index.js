import React, { useState, useEffect, Fragment } from "react";
import ConversationSearch from "../ConversationSearch";
import ConversationListItem from "../ConversationListItem";
import Toolbar from "../Toolbar";
import ToolbarButton from "../ToolbarButton";
import axios from "axios";
import { Tabs } from "antd";
import {
  InboxOutlined,
  MessageOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

import "./ConversationList.css";
import "./ConversationList.scss";
import { fetchConversations } from "../../redux/actions/profiles";
import { useSelector, useDispatch } from "react-redux";
const { TabPane } = Tabs;

function tabContent(props) {
  const conversations = useSelector((state) => state.conversations);
  return (
    <Fragment>
      <ConversationSearch />
      {conversations &&
        conversations.map((conversation) => {
          console.log(conversation);
          return (
            <h1>{conversation.name}</h1>
            /*<ConversationListItem key={conversation.name} data={conversation} />*/
          );
        })}
    </Fragment>
  );
}

export default function ConversationList(props) {
  const dispatch = useDispatch();
  // const [conversations, setConversations] = useState([]);
  // const conversations = useSelector((state) => state.conversations);

  // const conversations = [{ name: "test" }];
  useEffect(
    () => {
      getConversations();
    },
    [getConversations]
  );

  const getConversations = () => {
    // console.log("in function getconversations");
    dispatch(fetchConversations());
    // setConversations([...conversations, ...newConversations]);
  };

  return (
    <div className="conversation-list">
      <Tabs defaultActiveKey="2" className="Toolbar-tab">
        <TabPane
          tab={
            <span>
              <InboxOutlined />
              Tất cả
            </span>
          }
          key="1"
        >
          <tabContent />
        </TabPane>
        <TabPane
          tab={
            <span>
              <MessageOutlined />
              Tin nhắn
            </span>
          }
          key="2"
        >
          {tabContent}
        </TabPane>
        <TabPane
          tab={
            <span>
              <FacebookOutlined />
              Bình luận
            </span>
          }
          key="3"
        >
          {tabContent}
        </TabPane>
      </Tabs>
      {/* <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        /> */}
    </div>
  );
}
