import React from 'react';
import EventCard from './EventCard';

export default function EventList({ events, onSubscribe }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {events.map(ev => (
        <EventCard
          key={`${ev.title}-${ev.date}`}
          event={ev}
          onSubscribe={onSubscribe}
        />
      ))}
    </div>
  );
}
