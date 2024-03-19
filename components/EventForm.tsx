interface Event {
  title: string;
  description: string;
  image: File | null;
}


import React, { useState } from 'react';

const EventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, image });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div>
    
    <div className="max-w-md mx-auto bg-black py-5 px-20  ml-60 ">
      <h2 className="text-2xl font-bold mb-4">Create New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700">Title</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700">Event Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <div>
          <label htmlFor="image" className="block text-gray-700">Upload Image</label>
          <input type="file" id="image" onChange={handleImageChange} className="mt-1" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Create Event</button>
      </form>
    </div>
    </div>
  
  );
};

export default EventForm;
