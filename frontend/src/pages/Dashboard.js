import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Link to="/quiz-home">Open Quiz</Link>
      <button>Logout</button>
    </div>
  );
};

export default Dashboard;
