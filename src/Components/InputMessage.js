import React, { useEffect, useRef } from "react";
import "../App.css";

const inputDivStyle = {
  backgroundColor: "#ededed",
  width: "65%",
  height: "3.5rem",
  display: "flex",
  margin: 0,
  position: "absolute",
  bottom: 0,
};

const inputStyle = {
  border: "none",
  borderRadius: "10px",
  width: 785,
  marginLeft: "20px",
  height: "2rem",
  alignSelf: "center",
  fontSize: "1rem",
  backgroundColor: "white",
  outline: "none",
  padding:5
};
const iconStyle = {
  color: "#009588",
  alignSelf: "center",
  fontSize: 20,
  marginLeft: 25,
  marginRight: 25,
  cursor: "pointer",
};

export default function InputMessage({ keyword, onChange, onClick }) {
  const chatInput = useRef();
  useEffect(() => {
    chatInput.current.focus();
  }, [onClick]);

  function onKeyPress(e) {
    if (e.key === "Enter") {
      if (keyword.length > 0) {
        onClick();
      }
    }
  }
  return (
    <div style={inputDivStyle}>
      <input
        className="chatInput"
        style={inputStyle}
        value={keyword}
        onChange={onChange}
        onKeyPress={onKeyPress}
        ref={chatInput}
      ></input>
      <i
        style={iconStyle}
        className={
          keyword.length > 0 ? "fa fa-paper-plane" : "fas fa-paperclip"
        }
        onClick={keyword.length > 0 ? onClick : () => {}}
      ></i>
    </div>
  );
}
