import React, { useEffect, useState } from "react";
import ChatRow from "./ChatRow";

export default function ContactList({
  onClick,
  selectedChat,
  updatedMessages,
}) {
  const [data,setData]= useState(jsonData)
  const [readMessages] = useState([]);

  useEffect(() => {
    const index = jsonData.findIndex(
      (item) =>
        item.id === selectedChat.id &&
        selectedChat.messages &&
        selectedChat.messages.length === updatedMessages.length
    );
    if (index > 0) {
      jsonData.splice(index, 1);
      jsonData.unshift(selectedChat);
      setData([...jsonData]);
    }
  }, [updatedMessages.length,selectedChat]);


  return (
    <div>
      {
        data.map((item) => {
          return (
            <ChatRow
              key={item.id}
              onClick={() => {
                onClick(item);
                readMessages.push(item);
              }}
              item={item}
              selectedChat={selectedChat}
              readMessages={!readMessages.includes(item)}
            />
          );
        })
     }
    </div>
  );
}

const jsonData = [
  {
    id: "0.9239264919938981",
    username: "Farhad",
    profilePic:
      "https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg",
    unreadMessages: 1,
    messages: [
      {
        id: "0.5841282294973276",
        self: true,
        time: "thursday",
        text: "Hi Where are YOU?",
      },
      {
        id: "0.4775183215706955",
        self: false,
        time: "thursday",
        text: "Hello, How yo doing?",
      },
      {
        id: "0.3551369557935673",
        self: true,
        time: "thursday",
        text: "Im good. I asked WHERE ARE YOU?",
      },
      {
        id: "0.5717850563604858",
        self: false,
        time: "thursday",
        text: "eeaasy.. Im home",
      },
      {
        id: "0.9751417865777514",
        self: true,
        time: "23:59",
        text: "ok tnx",
      },
    ],
  },
  {
    id: "0.4465378641946167",
    username: "Haleh",
    profilePic:
      "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
    unreadMessages: 10,
    messages: [
      {
        id: "0.327866893543161981",
        self: true,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.6301445450600915689",
        self: false,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.08644545198096496347",
        self: true,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.4829997775480985803",
        self: false,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.1340002193045459945",
        self: true,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.327866893545316181",
        self: true,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.63015454406540091568",
        self: false,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.08644198540946347",
        self: true,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.482999777809l003",
        self: false,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.134000213439309945",
        self: true,
        time: "18:45",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
    ],
  },
  {
    id: "0.8980983179096746",
    username: "Reyhan",
    profilePic:
      "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
    unreadMessages: 5,
    messages: [
      {
        id: "0.2681290521294033",
        self: true,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.547877571102124",
        self: false,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.4786519643041942",
        self: true,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.7562438507158202",
        self: false,
        time: "11:59",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.7447698142945904",
        self: true,
        time: "11:58",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
    ],
  },
  {
    id: "0.3250587191564416",
    username: "Mehdi",
    profilePic:
      "https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg",
    unreadMessages: 3,
    messages: [
      {
        id: "0.9043963002491366",
        self: true,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.8082079264993698",
        self: false,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.20151985947251427",
        self: true,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.8434876402002951",
        self: false,
        time: "13:59",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.17520246311758547",
        self: true,
        time: "13:59",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
    ],
  },
  {
    id: "0.5277041774884073",
    username: "Milad",
    profilePic:
      "https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg",
    unreadMessages: 5,
    messages: [
      {
        id: "0.48672662272252154",
        self: true,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.3362944934535492",
        self: false,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.07466056643461494",
        self: true,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.9664233561710971",
        self: false,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.25653989885104767",
        self: true,
        time: "14:23",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
    ],
  },
  {
    id: "0.5633915844103474",
    username: "Jaber",
    profilePic:
      "https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg",
    unreadMessages: 15,
    messages: [
      {
        id: "0.2730614638162816",
        self: true,
        time: "23:20",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.1078147656605779",
        self: false,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.7486340859189815",
        self: true,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.9093600869896714",
        self: false,
        time: "thursday",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
      {
        id: "0.6122737879931837",
        self: true,
        time: "22:00",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Quisque eu lacinia dui.",
      },
    ],
  },
];
