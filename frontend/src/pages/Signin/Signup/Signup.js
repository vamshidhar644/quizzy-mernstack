import React, { useEffect, useState } from 'react';
import { auth, provider } from '../../../config/config';
import { signInWithPopup } from 'firebase/auth';
import Homepage from '../../Home/Home';

const Signup = () => {
  const [user, setUser] = useState();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUser(data.user);
      localStorage.setItem('email', data.user.email);

      console.log(data.user);
    });
  };

  useEffect(() => {
    setUser(localStorage.getItem('email'));
  },[]);
  return (
    <div>
      {user ? (
        <Homepage />
      ) : (
        <button onClick={handleClick}>Signin with google</button>
      )}
    </div>
  );
};

export default Signup;
