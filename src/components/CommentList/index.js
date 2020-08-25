import { List, message, Avatar, Spin } from "antd";
import reqwest from "reqwest";
import React, { Component, useState, useEffect } from "react";
import { Typography } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import { connect, useSelector } from "react-redux";
import Toolbar from "../Toolbar";
import { MessageOutlined, UserAddOutlined } from "@ant-design/icons";
import "./commentList.scss";
import { fetchCommentByPost } from "../../redux/actions/profiles";
import Axios from "axios";
import com from "../../utils";
import moment from "moment";
import CommentItem from "./CommentItem";
const { Text } = Typography;
const fakeDataUrl =
  "https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo";

export default function CommentList(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const currentPost = useSelector((state) => state.profile.currentPost);

  useEffect(
    () => {
      if (currentPost) {
        console.log(currentPost);
        Axios.get(
          `${com.root}/api/v1/fetchAllCommentByPost/${currentPost}`
        ).then((res) => {
          console.log(res.data.data.comment.data);
          setData(res.data.data.comment.data);
        });
      }
    },
    [currentPost]
  );
  const fetchData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: "json",
      method: "get",
      contentType: "application/json",
      success: (res) => {
        callback(res);
      },
    });
  };

  const handleInfiniteOnLoad = () => {
    setLoading(true);
    if (data.length > 14) {
      message.warning("Infinite List loaded all");
      setHasMore(false);
      setLoading(false);
      return;
    }
    fetchData((res) => {
      data = data.concat(res.results);
      setData(data);
      setLoading(false);
    });
  };

  return (
    <div className="message-list">
      <Toolbar
        title="Comments"
        leftItems={
          [
            // ,
            // <ToolbarButton
            //   key="info"
            //   icon="ion-ios-information-circle-outline"
            // />,
            // <ToolbarButton key="video" icon="ion-ios-videocam" />,
            // <ToolbarButton key="phone" icon="ion-ios-call" />
            // <MessageOutlined className="cursor-pointer" />,
            // <UserAddOutlined className="cursor-pointer" />,
          ]
        }
      />

      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={handleInfiniteOnLoad}
          hasMore={!loading && hasMore}
          useWindow={false}
        >
          <CommentItem/>
          {/* <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src="logo_user.jpg" />}
                  title={<a href="https://ant.design">Test User</a>}
                  description={moment(item.created_time).format(
                    "DD-MM-YY, HH:mm"
                  )}
                />
                <div>{item.message}</div>
              </List.Item>
            )}
          >
            {loading && hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List> */}
        </InfiniteScroll>
      </div>
    </div>
  );
}
