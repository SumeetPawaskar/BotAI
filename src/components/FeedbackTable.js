import React from "react";

function FeedbackTable({ feedbacks }) {
  return (
    <div className="table">
      <h3>Feedback Summary</h3>
      <table>
        <thead>
          <tr>
            <th>Conversation</th>
            <th>Rating</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback, idx) => (
            <tr key={idx}>
              <td>{`Conversation ${idx + 1}`}</td>
              <td>{feedback.rating}</td>
              <td>{feedback.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeedbackTable;
