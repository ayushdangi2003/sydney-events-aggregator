import React from 'react';
import { format } from 'date-fns';

export default function EventCard({ event, onSubscribe }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600">
          {format(new Date(event.date), 'MMM dd, yyyy')} @ {event.venue}
        </p>
      </div>
      <button
        className="mt-4 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
        onClick={() => onSubscribe(event.link)}
      >
        Get Tickets
      </button>
    </div>
  );
}
