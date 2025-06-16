import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import '../App.css';

export default function AdminPage() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'requests'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRequests(data);
    };
    fetchData();
  }, []);

  const updateStatus = async (id, status) => {
    const ref = doc(db, 'requests', id);
    await updateDoc(ref, { status });
    setRequests(prev =>
      prev.map(req => (req.id === id ? { ...req, status } : req))
    );
  };

  return (
    <div className="screen">
      <h2>Admin Panel</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Request</th><th>Urgency</th><th>Category</th><th>Status</th></tr>
        </thead>
        <tbody>
          {requests.map((r) => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.request}</td>
              <td>{r.urgency}</td>
              <td>{r.category}</td>
              <td>
                <select value={r.status} onChange={(e) => updateStatus(r.id, e.target.value)}>
                  <option>Pending</option>
                  <option>Working</option>
                  <option>Accepted</option>
                  <option>Declined</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
