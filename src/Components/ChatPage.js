import React, { useEffect, useRef } from "react";
import InputMessage from "./InputMessage";

const chatBarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  //   paddingRight: 25,
  //   paddingLeft: 25,
  width: "100%",
  height: 59,
  backgroundColor: "#ededed",
  borderBottom: "1px solid #ccc",
};
const iconStyle = {
  color: "#009588",
  fontSize: 20,
  marginLeft: 25,
  marginRight: 25,
  cursor: "pointer",
};
const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
};
const imageStyle = {
  width: 48,
  height: 48,
  borderRadius: "50%",
  marginRight: 10,
};

const receivedStyle = {
  backgroundColor: "#f5f5f5",
  border: "1px solid #ccc",
  borderRadius: "5%",
  padding: 5,
  width: 200,
  margin: 10,
};
const sentStyle = {
  ...receivedStyle,

  alignSelf: " flex-end",
  backgroundColor: "#9acd32",
};
const messagesStyle = {
  display: "flex",
  flexDirection: "column",
  overflowY: "scroll",
  height: 485,
  // paddingBottom:10
};

export default function ChatPage({ chatData, onClick,onSendMessage, chatInput,handleDraft }) {

  function handleChange(e) {
    
    handleDraft(e.target.value)
  }

  function handleSendClick() {
    const newMessage = {
      id: Math.random().toString(),
      self: true,
      time: "thursday",
      text: chatInput,
    };
    chatData.messages.push(newMessage);
    onSendMessage(chatData)
    handleDraft("");
  }

  const chatListRef = useRef(null);

  const scrollToBottom = () => {
    chatListRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatData.messages.length]);

  return (
    <div style={{ height: "100%" }}>
      <div style={chatBarStyle}>
        <i className="fas fa-times" style={iconStyle} onClick={onClick}></i>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img style={imageStyle} src={chatData.profilePic} alt="Profile" />
          <p style={titleStyle}>{chatData.username}</p>
        </div>
        <i className="fa fa-ellipsis-v" style={iconStyle}></i>
      </div>
      <div style={messagesStyle}>
        {chatData.messages.map((item) => {
          return (
            <span key={item.id} style={item.self ? sentStyle : receivedStyle}>
              {item.text}
            </span>
          );
        })}

        <div ref={chatListRef} />
      </div>
      <InputMessage
          keyword={chatInput}
          onChange={handleChange}
          onClick={handleSendClick}
        />
    </div>
  );
}
