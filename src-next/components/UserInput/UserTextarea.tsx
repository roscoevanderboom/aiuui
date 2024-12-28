import React, { useState } from "react";
import UserToolbar from "./UserToolbar";
import Textarea from "react-textarea-autosize";
import "./styles.css";

const UserTextArea: React.FC = () => {
  const [text, setText] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      setText("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="user-textarea-container">
      <UserToolbar />
      <Textarea
        maxRows={10}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="user-textarea"
        placeholder="Type your text here... (Shift + Enter to add new line)"
        rows={10}
      />
    </div>
  );
};

export default UserTextArea;
