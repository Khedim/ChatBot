import React, { useState } from "react";
import { FaCommentAlt, FaPen } from "react-icons/fa";
import { ChatBotHeader } from "./ChatBotHeader";
import { ChatBotTree } from "./ChatBotTree";
import { ChatBotInput } from "./ChatBotInput";

export const ChatBot = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [messages, setMessages] = useState([]);

  return (
    <div
      id="chatBot"
      className="position-fixed start-0 bottom-0 ms-sm-3 mb-sm-3"
    >
      {showChatBot ? (
        <div
          id="chat-bot"
          className="bg-light rounded-5 overflow-hidden d-flex flex-column"
        >
          <div id="chatbot-header">
            <ChatBotHeader setShowChatBot={setShowChatBot} />
            <p className="text-light text-start ps-4 position-relative">
              We're Online
            </p>
          </div>
          <div id="chatbot-tree" className="flex-fill overflow-auto">
            <ChatBotTree messages={messages} />
          </div>
          <div id="chatbot-input">
            <ChatBotInput setMessages={setMessages} />
          </div>
        </div>
      ) : (
        <div
          id="chat-ball"
          className={`rounded-circle ${hovering ? "bg-light" : "bg-dark"}`}
          onClick={() => {
            setShowChatBot(true);
            setHovering(false);
          }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {hovering ? (
            <FaPen className="m-4 fs-3 text-primary" />
          ) : (
            <FaCommentAlt className="m-4 fs-3 text-light" />
          )}
        </div>
      )}
    </div>
  );
};
