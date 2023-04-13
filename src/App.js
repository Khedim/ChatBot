import React, { useState } from "react";
import "./App.css";
import { ChatBotBall } from "./ChatBotBall";
import { ChatBot } from "./ChatBot";
import { ChatBotForm } from "./ChatBotForm";

function App() {
  const [showChatBot, setShowChatBot] = useState(false);
  const [firstname, setFirstname] = useState("");

  return (
    <div
      id="chatBot"
      className="App position-fixed start-0 bottom-0 ms-sm-3 mb-sm-3"
    >
      {showChatBot ? (
        firstname === "" ? (
          <ChatBotForm
            setShowChatBot={setShowChatBot}
            setFirstname={setFirstname}
          />
        ) : (
          <ChatBot setShowChatBot={setShowChatBot} />
        )
      ) : (
        <ChatBotBall setShowChatBot={setShowChatBot} />
      )}
    </div>
  );
}

export default App;
