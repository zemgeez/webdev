
interface Event {
    title: string;
    description: string;
    image: File | null; 
  }

  
  // EventCard.js
import React from 'react';


const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
      <p className="text-gray-700">{event.description}</p>
      {event.image && (
        <img src={URL.createObjectURL(event.image)} alt="Event Image" className="mt-4 w-full" />
      )}
   
    </div>
  );
};

export default EventCard;
