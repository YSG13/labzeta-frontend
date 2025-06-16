import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

export default function Confirmation() {
  const { id } = useParams();
  return (
    <div className="screen">
      <div className="message">
        Your ID is: <strong>{id}</strong>
        <br />
        Don’t lose it 🙂
      </div>
    </div>
  );
}
