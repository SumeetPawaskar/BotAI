import React from "react";

function ConversationPanel({ conversations }) {
  return (
    <div className="panel">
      <h3>Saved Conversations</h3>
      <ul>
        {conversations.map((conversation, idx) => (
          <li key={idx}>Conversation {idx + 1}</li>
        ))}
      </ul>
    </div>
  );
}

export default ConversationPanel;
