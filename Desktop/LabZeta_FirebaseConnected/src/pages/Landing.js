import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="screen">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="Lab Zeta"
        onClick={() => navigate('/')}
      />
      <a className="admin-button" href="/admin">Admin</a>
      <h1>Welcome to Lab Zeta</h1>
      <button className="button" onClick={() => navigate('/request')}>
        Request
      </button>
    </div>
  );
}
