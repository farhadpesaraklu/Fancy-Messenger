import React from "react";
import "../App.css";

const imageStyle = {
  width: 48,
  height: 48,
  borderRadius: "50%",
};
const contactContainer = {
  display: "flex",
  padding: 15,
  borderBottom: "1px solid #ccc",
  justifyContent: "space-between",
  cursor: "pointer",
};
const titleStyle = {
  fontSize: "1.2rem",
  fontWeight: 700,
};

const messsageContainer = {
  marginLeft: 10,
};

const messageStyle = {
  marginTop: 5,
  marginLeft: 3,
  fontSize: ".9rem",
  //   textOverflow: "ellipsis",
  //   whiteSpace: "nowrap",
  //   overflow: "hidden",
};

const unreadMessageNum = {
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  backgroundColor: "#ccc",
  color: "white",
  borderRadius: 50,
  padding: 5,
  width:18,
  height:18,
};

const timeContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function ChatRow({ item, onClick, readMessages }) {
  const lastMessage = item.messages.length - 1;

  return (
    <div
      className="chatRow"
      onClick={() => {
        onClick(item);
      }}
    >
      <div style={contactContainer}>
        <div style={{ display: "flex" }}>
          <img style={imageStyle} src={item.profilePic} alt="profile" />
          <div style={messsageContainer}>
            <div style={titleStyle}>{item.username}</div>
            <div style={messageStyle}>{item.messages[lastMessage].text}</div>
          </div>
        </div>
        <div style={timeContainerStyle}>
          <div style={{ color: "#9c9c9c" }}>
            {item.messages[lastMessage].time}
          </div>
          {readMessages && <div style={unreadMessageNum}>{item.unreadMessages}</div>}
        </div>
      </div>
    </div>
  );
}
