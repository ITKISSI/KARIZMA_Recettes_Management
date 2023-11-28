import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../../Services/UserService'; 
const LoginForm = () => {
  const [user, setUser] = useState({ login: '', password: '' });
  const [error, setError] = useState('');
  const history = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userData = await login(user);

      history('/recettes');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            name="login"
            value={user.login}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
