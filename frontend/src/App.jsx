import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventList from './components/EventList';
import SubscribeModal from './components/SubscribeModal';

export default function App() {
  const [events, setEvents] = useState([]);
  const [modalLink, setModalLink] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(res => setEvents(res.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <header className="bg-white shadow p-6 text-center">
        <h1 className="text-4xl font-bold">Sydney Events</h1>
      </header>
      <main>
        <EventList events={events} onSubscribe={setModalLink} />
      </main>
      {modalLink && (
        <SubscribeModal link={modalLink} onClose={() => setModalLink(null)} />
      )}
    </div>
  );
}
