import React from "react";
import "../MessageContainer/MessageContainer.css";

const MessageContainer = (props) => {
  // const [message, setMessage] = useState();
  const { messageList } = props;
  return (
    <div className="messageContainer">
      {messageList.map((messageList, key) => {
        return messageList.name === "system" ? (
          <div className="system-message" key={messageList.key}>
            {messageList.chat}
          </div>
        ) : messageList.name === "my" ? (
          <div className="my-message-container" key={messageList.key}>
            <div className="my-message">{messageList.chat}</div>
          </div>
        ) : (
          <div className="your-message-container" key={messageList.key}>
            <img src="/profile.jpg" className="profile-img" />
            <div className="your-message">{messageList.chat}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageContainer;
