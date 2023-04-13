import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import marie from "./assets/marie.png";

export const ChatBotForm = (props) => {
  const [inputFirstname, setInputFirstname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setFirstname(inputFirstname);
  };
  return (
    <>
      <div className="text-end p-2">
        <RiCloseFill
          className="x fs-4"
          onClick={() => props.setShowChatBot(false)}
        />
      </div>
      <div className="p-5 pb-3">
        <img
          src={marie}
          alt="user"
          className="rounded-circle m-4"
          style={{ width: "70px" }}
        />
        <p className="fs-4 fw-semibold">What's your first name?</p>
      </div>
      <form className="p-2 flex-fill" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          className="form-control mb-4 p-2"
          value={inputFirstname}
          onChange={(e) => setInputFirstname(e.target.value)}
        />
        <button className="btn btn-dark col-11">Submit</button>
      </form>
      <div className="form-footer"></div>
    </>
  );
};
