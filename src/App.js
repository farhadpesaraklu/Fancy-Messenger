import "./App.css";
import Header from "./Components/Head";
import TitleBar from "./Components/TitleBar";
import ContactList from "./Components/ContactList";
import { useState } from "react";
import ChatPage from "./Components/ChatPage";
import SearchInput from "./Components/SearchInput";

const sideBarStyle = {
  width: "35%",
  borderRight: "2px solid #ccc",
};
const mainStyle = {
  display: "flex",
  width: "100%",
  border: "1px solid #ccc",
  borderBottom: "0px",
};
const chatHeadStyle = {
  backgroundColor: "#009588",
  height: "14vh",
  width: "100%",
};

function App() {
  const [showChatPage, setShowChatPage] = useState(false);
  const [selectedChat, setSelectedChat] = useState({ messages: [] });
  const [chatInput, setChatInput] = useState("")

  function onRowClick(object) {
    setShowChatPage(true);
    setSelectedChat(object);
    setUpdatedMessages([]);
  }
  function onCloseBtnClick() {
    setShowChatPage(false);
  }

  function handleDraft(keyword){
    setChatInput(keyword)
  }

  const [showSearchInput, setShowSearchInput] = useState(false);
  function handleSearchClick() {
    setShowSearchInput(true);
  }
  function handleBackClick() {
    setShowSearchInput(false);
  }
  const [searchKeyword, setSearchKeyword] = useState("");
  function handleInputChange(e) {
    setSearchKeyword(e.target.value);
  }

  const [updatedMessages, setUpdatedMessages] = useState([]);

  function handleOnSend(obj) {
    setSelectedChat(obj);
    setUpdatedMessages(obj.messages);
  }

  return (
    <>
      <Header />
      <div style={mainStyle}>
        <div style={sideBarStyle}>
          {showSearchInput ? (
            <SearchInput
              onClick={handleBackClick}
              value={searchKeyword}
              onChange={handleInputChange}
            />
          ) : (
            <TitleBar onClick={handleSearchClick} />
          )}
          <ContactList
            onClick={onRowClick}
            selectedChat={selectedChat}
            updatedMessages={updatedMessages}
            chatInput={chatInput}
            handleDraft={handleDraft}
          />
        </div>
        <div style={{ borderBottom: "1px solid #ccc", width: "65%" }}>
          {showChatPage ? (
            <ChatPage
              chatData={selectedChat}
              onClick={onCloseBtnClick}
              onSendMessage={handleOnSend}
              chatInput={chatInput}
              handleDraft={handleDraft}
            />
          ) : (
            <div style={{ width: "100%" }}>
              <div style={chatHeadStyle} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
