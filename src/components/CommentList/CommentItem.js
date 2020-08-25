import React from "react";
import PropTypes from "prop-types";
import { Avatar, Card, Row, Button } from "antd";
import "./CommentItem.scss";
import { Typography, Space } from "antd";

const { Text, Link, Paragraph } = Typography;

function CommentItem(props) {
  return (
    <Card className="card">
      {/* <!-- post title start --> */}
      <Row className="post-title mb-2" align="middle">
        {/* <!-- profile picture end --> */}
        <div className="profile-thumb mr-2">
          <Avatar
            shape="square"
            size={64}
            src="logo_user.jpg"
            alt="profile picture"
          />
        </div>
        {/* <!-- profile picture end --> */}

        <div className="posted-author">
          <Text className="author">merry watson</Text>
          <Text className="post-time">20 min ago</Text>
        </div>
      </Row>
      {/* <!-- post title start --> */}
      <div className="post-content">
        <div className="post-thumb-gallery">
          <figure className="post-thumb img-popup">
            <a href="images/post/post-large-1.jpg">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
                alt="post image"
              />
            </a>
          </figure>
        </div>
        <Paragraph className="post-title" strong>
          Josephin Doe posted on your timeline
        </Paragraph>
        <Paragraph className="post-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem alias
          rem optio porro saepe earum aut iure laboriosam magni ducimus fuga,
          doloribus nulla architecto cupiditate quasi deserunt assumenda numquam
          necessitatibus.
        </Paragraph>
        <div className="post-meta">
          <div type="primary" className="post-meta-like mr-2">
            <Row align="middle">
              <ion-icon name="heart-outline"></ion-icon>
              <span className="ml-1">Likes(20)</span>
              {/* <strong>201</strong> */}
            </Row>
          </div>
          <div type="primary" className="post-comment mr-2">
            <Row align="middle">
              <ion-icon name="chatbox-ellipses-outline"></ion-icon>
              <span className="ml-1">Comments(41)</span>
            </Row>
          </div>
          <div type="primary" className="post-share mr-2">
            <Row align="middle">
              <ion-icon name="share-social-outline"></ion-icon>
              <span className="ml-1">Shares(07)</span>
            </Row>
          </div>
        </div>
      </div>
    </Card>
  );
}

CommentItem.propTypes = {};

export default CommentItem;
