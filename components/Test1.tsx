// import React, { useState } from 'react';
// import frontImage from './eve1.png'; // Import front image
// import backImage from './eve3.png'; // Import back image
// import Image from 'next/image'; // Import next/image for optimization
// // import './styles.css'; // Import your Tailwind CSS styles


// function FlipCard() {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const flipCard = () => {
  
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <div className="relative w-64 h-64" onMouseEnter={flipCard} onMouseLeave={flipCard}>
//       <div className={`absolute inset-0 flex justify-center items-center transition-transform duration-500 transform ${isFlipped ? 'rotate-y-180' : 'rotate-y-0'}`}>
//         <Image src={frontImage.src} alt="Front" width={128} height={128} className="object-cover" />
//       </div>
//       <div className={`absolute inset-0 flex justify-center items-center transition-transform duration-500 transform ${isFlipped ? 'rotate-y-0' : 'rotate-y-180'}`}>
//         <Image src={backImage.src} alt="Back" width={128} height={128} className="object-cover" />
//       </div>
//     </div>
//   );
// }

// export default FlipCard;
