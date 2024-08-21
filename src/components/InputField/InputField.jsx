import React from "react";
import "../InputField/InputField.css";

const InputField = (props) => {
  const { message, setMessage, sendMessage } = props;
  return (
    <div className="inputField">
      <form onSubmit={sendMessage}>
        <p className="more">+</p>
        <input
          placeholder="Type in here…"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        {/* <button className="green" type="submit">
          send
        </button> */}
      </form>
    </div>
  );
};

export default InputField;
