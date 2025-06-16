import React, { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import '../App.css';

export default function TrackStatus() {
  const [requestId, setRequestId] = useState('');
  const [status, setStatus] = useState('');

  const checkStatus = async () => {
    const docRef = doc(db, 'requests', requestId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setStatus(docSnap.data().status);
    } else {
      setStatus('Request not found');
    }
  };

  return (
    <div className="screen">
      <h2>Track Request</h2>
      <input
        value={requestId}
        onChange={(e) => setRequestId(e.target.value)}
        placeholder="Enter your request ID"
      />
      <button className="button" onClick={checkStatus}>Check Status</button>
      {status && <div className="message">Status: {status}</div>}
    </div>
  );
}
