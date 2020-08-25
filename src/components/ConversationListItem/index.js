import React, { useEffect } from "react";
import shave from "shave";
import { Typography, Divider } from "antd";

import "./ConversationListItem.css";

const { Title, Paragraph, Text } = Typography;
export default function ConversationListItem({
  photo,
  name,
  text,
  handleClickListItem,
}) {
  useEffect(() => {
    shave(".conversation-snippet", 20);
  });

  return (
    <div className="conversation-list-item" onClick={handleClickListItem}>
      <img className="conversation-photo" src={photo} alt="conversation" />
      <div className="conversation-info">
        {/* <Text strong>{name}</Text> */}
        <h3 className="conversation-title">{name}</h3>
        <p className="conversation-snippet">{text}</p>
      </div>
    </div>
  );
}
