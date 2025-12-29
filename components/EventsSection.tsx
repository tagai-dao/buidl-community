import React from 'react';

export const EventsSection: React.FC = () => {
  const events = [
    { name: "BUIDL Café Soft Opening", date: "Dec 2025", type: "Meetup", status: "Completed" },
    { name: "Bye to old, BUIDL the future", date: "Oct 2025", type: "Meetup", status: "Completed" },
    { name: "The First BUIDL Gathering", date: "Sep 2025", type: "Meetup", status: "Completed" },
  ];

  return (
    <section id="events" className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold inline-block relative">
          BUIDL's Events
          <svg className="absolute w-full h-4 -bottom-2 left-0 text-buidl-black" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0 5 Q 25 10 50 5 T 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
          </svg>
        </h2>
      </div>

      <div className="space-y-6">
        {events.map((event, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center gap-6 p-6 border-b-2 border-black/10 hover:bg-gray-50 transition-colors group">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-black border-dashed group-hover:rotate-6 transition-transform">
               <span className="text-2xl font-bold">{event.date.split(' ')[0].substring(0,3)}</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-3xl font-bold group-hover:text-purple-600 transition-colors">{event.name}</h3>
              <p className="text-xl text-gray-500">{event.date} • {event.type}</p>
            </div>
            <div className="flex-shrink-0">
              <span className="px-4 py-2 rounded-full border-2 border-black font-bold bg-white shadow-sketch">
                {event.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};