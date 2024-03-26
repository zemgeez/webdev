import React, { useState } from 'react';
import './styles.css'; // Import your Tailwind CSS styles

function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-64 h-64" onMouseEnter={flipCard} onMouseLeave={flipCard}>
      <div className={`absolute inset-0 flex justify-center items-center transition-transform duration-500 transform ${isFlipped ? 'rotate-180' : 'rotate-0'}`}>
        <div className="w-32 h-32 bg-blue-500 text-white flex justify-center items-center">
          Front
        </div>
      </div>
      <div className={`absolute inset-0 flex justify-center items-center transition-transform duration-500 transform ${isFlipped ? 'rotate-0' : 'rotate-180'}`}>
        <div className="w-32 h-32 bg-green-500 text-white flex justify-center items-center">
          {/* Different content displayed on hover */}
          {isFlipped ? 'Back Text' : 'Hover to Flip'}
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
