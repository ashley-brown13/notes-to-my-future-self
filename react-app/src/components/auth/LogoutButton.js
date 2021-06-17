import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import logoutIcon from "../../images/log-out.png";
import '../NavBar.css'

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <button onClick={onLogout} className="logout-button">
      <img src={logoutIcon} alt="logout icon" />
    </button>
  )
};

export default LogoutButton;
