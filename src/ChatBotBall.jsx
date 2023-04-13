import React, { useState } from 'react'
import { FaCommentAlt, FaPen } from "react-icons/fa";

export const ChatBotBall = (props) => {
    const [hovering, setHovering] = useState(false);
    return (
        <div
          id="chat-ball"
          className={`rounded-circle ${hovering ? "bg-light" : "bg-dark"}`}
          onClick={() => {
            props.setShowChatBot(true);
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
    )
}
