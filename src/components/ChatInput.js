import React, { useState } from "react";

function ChatInput({ selectedQuestion }) {
  const [inputValue, setInputValue] = useState(selectedQuestion);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={inputValue}
        placeholder="Type your question here..."
        onChange={handleInputChange}
      />
      <button className="ask-button">Ask</button>
      <button className="save-button">Save</button>
    </div>
  );
}

export default ChatInput;
