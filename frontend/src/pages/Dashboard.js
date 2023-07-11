import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

const Dashboard = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  return (
    <div>
      <Link to="/quiz-home">Open Quiz</Link>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Dashboard;
