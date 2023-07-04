import React from 'react';

const Homepage = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Homepage;
