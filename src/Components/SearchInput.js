import React, { useEffect, useRef } from "react";

const searchMainDivStyle = {
    height: "59px",
    backgroundColor: "#ededed",
    width: "100%",
    display: "flex",
  };

  const searchDivStyle = {
    width: "100%",
    borderRadius: "2px",
    height: "80%",
    border: "none",
    backgroundColor: "#ededed",
    outline: "none",
    fontSize: "1.25rem",
    alignSelf:"center"
  };
  const lastSectionStyle={
    width: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  }
const iconDivStyle={
  width: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
}
const iconStyle = {
    color: "#009588",
    fontSize: 20,
    cursor: "pointer",
  };
const innerSearchDivStyle={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    fontSize: "1.5rem",
    fontWeight: 700,
}
const searchInputStyle={
    width: "100%",
    borderRadius: "2px",
    height: "80%",
    border: "none",
    backgroundColor: "#ededed",
    outline: "none",
    fontSize: "1.25rem"
}

export default function SearchInput({onClick, value, onChange}){
  const searchInput=useRef()
  useEffect(()=>{
searchInput.current.focus()
  },[])
    return(
        <div style={searchMainDivStyle} > 
<div style={iconDivStyle}>
  <i className="fas fa-arrow-left" style={iconStyle} onClick={onClick}></i>
</div>
<div style={searchDivStyle}>
    <div style={innerSearchDivStyle}>
        <input style={searchInputStyle}
        value={value}
        onChange={onChange}
        ref={searchInput}
        ></input>
    </div>
</div>
<div style={lastSectionStyle}></div>
</div>

    )
}