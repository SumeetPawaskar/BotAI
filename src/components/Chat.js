import React, { useState } from "react";
import sampleData from "../sampleData.json";
import RatingModal from "./RatingModal";

function Chat({ onSave }) {
  const [messages, setMessages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const askQuestion = () => {
    const questionIndex = messages.length;
    if (questionIndex < sampleData.length) {
      const message = {
        question: sampleData[questionIndex].question,
        response: sampleData[questionIndex].response,
        feedback: null,
      };
      setMessages([...messages, message]);
    }
  };

  const handleSaveFeedback = (feedback) => {
    onSave(messages, feedback);
    setMessages([]);
    setIsModalOpen(false);
  };

  return (
    <div className="chat">
      <button onClick={askQuestion}>Ask Question</button>
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className="message">
            <p><b>Q:</b> {msg.question}</p>
            <p><b>A:</b> {msg.response}</p>
          </div>
        ))}
      </div>
      {messages.length > 0 && (
        <button onClick={() => setIsModalOpen(true)}>End Conversation</button>
      )}
      {isModalOpen && (
        <RatingModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSaveFeedback}
        />
      )}
    </div>
  );
}

export default Chat;
