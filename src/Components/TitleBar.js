import React from "react";

export default function TitleBar({onClick}) {
  const titleBarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 25,
    paddingLeft: 25,
    // width: "30vw",
    height: 59,
    backgroundColor: "#ededed",
    borderBottom: "1px solid #ccc",
  };
  const iconStyle = {
    color: "#009588",
    fontSize: 20,
    cursor: "pointer",
  };
  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };


  return (
    <>
      <div style={titleBarStyle}>
        <i className="fas fa-bars" style={iconStyle}></i>
        <p style={titleStyle}>Fancy Messenger</p>
        <i className="fas fa-search" style={iconStyle} onClick={onClick}></i>
      </div>
    </>
  );
}

