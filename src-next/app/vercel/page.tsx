'use client'
import "./styles.css";
import UserTextArea from "components/UserInput/UserTextarea";
import React, { useState } from "react";

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  return (
    <div className="chat-container">
      <div className="messages-area">
        {messages.map((msg, index) => (
          <div key={index} className="message-item">
            {msg}
          </div>
        ))}
      </div>
      <div className="input-container">
        <UserTextArea />
      </div>
    </div>
  );
};

export default ChatPage;
