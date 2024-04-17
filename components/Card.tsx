
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import React from "react";
// import { Card, CardHeader, CardBody, CardFooter, Image } from 'react-bootstrap'; // Import necessary components

// export default function Tcard() {
//   return (
//     <div className="flex flex-wrap justify-center">
//       <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
//         <Image
//           alt="Card background"
//           className="w-full"
//           src="./dr1.jpeg"
//         />
//         <div className="px-6 py-4">
//           <div className="font-bold text-xl mb-2">Prof. Dilip Kumar Baidya</div>
//           <p className="text-gray-700 text-base">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officiis?
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }





import React from "react";

export default function Tcard() {
  return (
    
      
        <div className="bg-white flex flex-wrap justify-center mt-10 hover:shadow-lg">
          <div className=" container   md:w-screen bg-white/80 rounded-lg overflow-hidden shadow-lg m-4 md:flex lg:w-full">
           
            <img
              alt="Card background"
              className="w-full mt-16 md:w-2/3 h-2/3 lg:w-1/2 "
              src="./dr1.jpeg"
            />
           
            <div className="p-6 flex flex-col justify-center">
              <div className="font-bold text-xl mb-4">Prof. Dilip Kumar Baidya</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officiis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officiis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officiis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officiis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officiis?
              </p>
            </div>
          </div>
        </div>
      
    
  );
}
