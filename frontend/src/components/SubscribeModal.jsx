import React, { useState } from 'react';
import axios from 'axios';

export default function SubscribeModal({ link, onClose }) {
  const [email, setEmail]   = useState('');
  const [error, setError]   = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/subscribe', {
        email,
        eventLink: link,
      });
      window.location.href = res.data.redirect;
    } catch {
      setError('Subscription failed. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-md p-6">
        <h2 className="text-2xl mb-4">Enter your email</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full border rounded px-3 py-2 mb-4"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 rounded bg-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white"
            >
              Confirm & Go
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
