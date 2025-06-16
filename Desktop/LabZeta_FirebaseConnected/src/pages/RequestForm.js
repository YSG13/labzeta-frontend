import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function RequestForm() {
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');
  const [category, setCategory] = useState('');
  const [urgency, setUrgency] = useState('Low');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'requests'), {
      name,
      request,
      category,
      urgency,
      status: 'Pending',
      timestamp: Timestamp.now()
    });
    navigate(`/confirmation/${docRef.id}`);
  };

  return (
    <div className="screen">
      <h2>Submit Request</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input value={request} onChange={(e) => setRequest(e.target.value)} placeholder="Request" required />
        <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
        <select value={urgency} onChange={(e) => setUrgency(e.target.value)}>
          <option value="Low">Low</option>
          <option value="High">High</option>
        </select>
        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
}
