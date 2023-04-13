import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

export const ChatBotInput = (props) => {
  const [messageValue, setMessageValue] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    props.setMessages((prev) => [
      ...prev,
      { isquestion: true, text: messageValue },
    ]);
    setMessageValue("");
  };
  return (
    <form className="d-flex p-3" onSubmit={handelSubmit}>
      <textarea
        className="border-0 bg-light fs-5 flex-fill"
        placeholder="Enter your message ..."
        style={{ resize: "none" }}
        onChange={(e) => setMessageValue(e.target.value)}
        value={messageValue}
      />
      <button className="bg-dark border-0 rounded-circle p-4">
        <AiOutlineSend className="text-light fs-2" />
      </button>
    </form>
  );
};
