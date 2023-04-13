import React from "react";
import { ChatBotHeader } from "./ChatBotHeader";
import { ChatBotTree } from "./ChatBotTree";
import { ChatBotInput } from "./ChatBotInput";

export const ChatBot = (props) => {
  return (
    <>
      <div id="chatbot-header">
        <ChatBotHeader setShowChatBot={props.setShowChatBot} />
        <p className="text-light text-start ps-4 position-relative">
          We're Online
        </p>
      </div>
      <div id="chatbot-tree" className="flex-fill overflow-auto">
        <ChatBotTree messages={props.messages} />
      </div>
      <div id="chatbot-input">
        <ChatBotInput setMessages={props.setMessages} />
      </div>
    </>
  );
};
