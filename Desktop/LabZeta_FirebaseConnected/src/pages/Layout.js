import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import '../App.css';

export default function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <img
        className="fixed-logo"
        src="/labzeta-logo.png"
        alt="Lab Zeta"
        onClick={() => navigate('/')}
      />
      <Outlet />
    </>
  );
}
