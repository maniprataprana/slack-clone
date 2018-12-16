import React from "react";
import { Comment, Image } from "semantic-ui-react";
import moment from "moment";

const isOwnMessage = (message, user) =>
  message.user.id === user.uid ? "message__self" : "";

const timeFromNow = timestamp => moment(timestamp).fromNow();

const isImage = message =>
  message.hasOwnProperty("image") && !message.hasOwnProperty("content");

const Message = ({ message, user }) => (
  <Comment>
    <Comment.Avatar src={message.user.avatar} />
    <Comment.Content className={isOwnMessage(message, user)}>
      <Comment.Author as="a">{message.user.name}</Comment.Author>
      <Comment.Metadata>{timeFromNow(message.timestamp)}</Comment.Metadata>

      {isImage(message) ? (
        <Image className="message__image" src={message.image} />
      ) : (
        <Comment.Text>{message.content}</Comment.Text>
      )}
    </Comment.Content>
  </Comment>
);

export default Message;
