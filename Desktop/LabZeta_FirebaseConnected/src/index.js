import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Landing from './pages/Landing';
import RequestForm from './pages/RequestForm';
import Confirmation from './pages/Confirmation';
import TrackStatus from './pages/TrackStatus';
import AdminPage from './pages/AdminPage';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="request" element={<RequestForm />} />
        <Route path="confirmation/:id" element={<Confirmation />} />
        <Route path="track" element={<TrackStatus />} />
        <Route path="admin" element={<AdminPage />} />
      </Route>
    </Routes>
  </Router>
);
