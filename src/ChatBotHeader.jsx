import React from "react";
import marie from "./assets/marie.png";
import { RiCloseFill } from 'react-icons/ri'

export const ChatBotHeader = (prop) => {
  return (
    <div className="d-flex align-items-center text-light p-3 ps-4 pe-4">
      <img
        src={marie}
        alt="person"
        className="rounded-circle"
        style={{ width: "50px" }}
      />
      <div className="flex-fill text-start ms-3 header-info">
        <p className="p-0">Chat With</p>
        <h4 className="p-0">Debbie</h4>
        <span className="p-0">connecting ...</span>
      </div>
      <RiCloseFill className="x fs-4" onClick={() => prop.setShowChatBot(false)} />
    </div>
  );
};
