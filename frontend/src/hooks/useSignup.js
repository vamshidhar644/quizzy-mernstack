import { useState } from 'react';
import { UseAuthContext } from '../context/AuthContext';

export const useSignup = () => {
  const [signerror, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = UseAuthContext();

  const signup = async (_id, fullName, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('/api/admin/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _id,
        fullName,
        email,
        password,
      }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError('*' + json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // update the auth context
      dispatch({ type: 'LOGIN', payload: json });

      setIsLoading(false);
    }
  };
  return { signup, isLoading, signerror };
};
