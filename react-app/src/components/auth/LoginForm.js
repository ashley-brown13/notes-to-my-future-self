import React, { useState } from "react";
import  { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import './LoginForm.css'

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/notes/text" />;
  }

  return (
    <div className="login-page">
    <form onSubmit={onLogin} className="login-form">
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div className="login-email-password">
        <div className="login-label-input">
            <label htmlFor="email" className="login-label">Email</label>
            <input
            name="email"
            type="text"
            className="login-input"
            value={email}
            onChange={updateEmail}
            />
        </div>
        <div className="login-label-input">
            <label htmlFor="password" className="login-label">Password</label>
            <input
            name="password"
            type="password"
            className="login-input"
            value={password}
            onChange={updatePassword}
            />
        </div>
      </div>
      <button type="submit" className="login-button">Login</button>
    </form>
    </div>
  );
};

export default LoginForm;
