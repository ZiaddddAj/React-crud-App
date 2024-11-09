import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const View = () => {
  const { id } = useParams();
  const item = useSelector(state => state.items.items.find(item => item.id === id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Item Details</h1>
      <div className="bg-white p-4 rounded shadow">
        <p><strong>Name:</strong> {item.name}</p>
        <p><strong>Username:</strong> {item.username}</p>
        <p><strong>Email:</strong> {item.email}</p>
      </div>
    </div>
  );
};

export default View;