import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import PredefinedQuestions from "./components/PredefinedQuestions";
import ChatInput from "./components/ChatInput";
import "./styles.css";

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const handlePredefinedQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <h1 className="title">How Can I Help You Today?</h1>
        <PredefinedQuestions onSelect={handlePredefinedQuestionClick} />
        <ChatInput selectedQuestion={selectedQuestion} />
      </div>
    </div>
  );
}

export default App;
