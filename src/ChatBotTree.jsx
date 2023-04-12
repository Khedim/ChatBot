export const ChatBotTree = (props) => {
  return (
    <div className="p-3 overflow-hidden">
      {props.messages.map((msg) => (
        <p
          key={msg.text}
          className={`text-start bg-dark text-light p-2 ps-3 pe-3 mb-4 rounded-5 ${
            msg.isQuestion ? "me-auto" : "ms-auto"
          }`}
        >
          {msg.text}
        </p>
      ))}
    </div>
  );
};
