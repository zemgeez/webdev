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

import React, { useState } from 'react';
var pimages = [
    {
        "name": "test1",
        "src": "./eve1.png"
    },
    {
        "name": "test1",
        "src": "./eve7.png"
    },    
    {
        "name": "test1",
        "src": "./eve3.png"
    },
    {
        "name": "test1",
        "src": "./eve2.png"
    },
    {
        "name": "test1",
        "src": "./eve3.png"
    },
    {
        "name": "test1",
        "src": "./eve3.png"
    },
    {
        "name": "test1",
        "src": "./eve3.png"
    },
    {
        "name": "test1",
        "src": "./eve3.png"
    }
]
var imgSorces = ['./eve7.png', './eve2.png', './eve3.png']




var num = [1,2,3,4];
// var kuch = num.map((Xs) => Xs * 2 );

const users = [
    { name: 'John', age: 25 },
    { name: 'Mary', age: 30 },
    { name: 'Jane', age: 20 },
    { name: 'Bob', age: 35 },
  ];

  var mi = [5,10,15,20,25];
  


  

  

export default function NewC() {


    

    const [filteredUsers, setFilteredUsers] = useState(users);

    const handleFilter = (event) => {
        const value = event.target.value;
        const filtered = users.filter(user => user.name.includes(value));
        setFilteredUsers(filtered);
      };





    return(
        <>
        {
            pimages.map(x => {
                return (
                    <div className="bg-black py-2 grid grid-rows-2 auto-cols-auto">
                      <img className="h-[50px]" src={x.src} alt={x.name} />
                      <hr className="w-full border-t border-gray-500 mt-2" />
                    </div>
                  );
                  

            })
        }

{
    mi.filter(currE => currE > 10 {
        return 
    } )
}


        {
            users.map(x => {
            return (
                <div>
                  <input type="text" onChange={handleFilter} />
                  {filteredUsers.map(user => (
                    <div key={user.name}>
                      <p>Name: {user.name}</p>
                      <p>Age: {user.age}</p>
                    </div>
                  ))}
                </div>
              );
            })
        }




        {/* {   
            num.map(((Xs) => Xs); {
                return <div><br />{}</div>
            })
        } */}
        
        
        {/* <div className="max-w-[1891px] bg-black/25 max-auto py-10 grid sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-5 gap-6 ">
    
            <div className="bg-black py-5  text-center font-medium tracking-widest col-span-full text-white sm:mx-14 md:mx-14 lg:mx-14 ">E V E N T's</div>
            <div className="bg-black py-5  text-center sm:col-start-2 md:col-start-2  lg:col-start-2 "><img src="./eve7.png" alt="" /></div>
            <div className="bg-black py-5  text-center sm:col-start-3 md:col-start-3 lg:col-start-3 "><img src="./eve2.png" alt="" /></div>
            <div className="bg-black py-5  text-center  sm:col-start-2 md:col-start-4 lg:col-start-4 "><img src="./eve5.png" alt="" /></div>
            <div className="bg-black py-5  text-center sm:col-start-3 md:col-start-2 lg:col-start-2  "><img src="./eve4.png" alt="" /></div>
            <div className="bg-black py-5  text-center sm:col-start-2 md:col-start-3 lg:col-start-3 "><img src="./eve1.png" alt="" /></div>
            <div className="bg-black py-5  text-center sm:col-start-3 md:col-start-4 lg:col-start-4"><img src="./eve3.png" alt="" /></div> */}
            
            <div className="max-w-[1891px] bg-black/25 max-auto py-10 grid grid-rows-2 grid-flow-col  gap-6 ">
    
            {/* <div className="bg-black py-5   text-center font-medium tracking-widest sm: col-start-1 col-end-7  text-white  ">E V E N T's</div> */}
            <div className="bg-black py-5  text-center "><img src="./eve7.png" alt="" /></div>
            <div className="bg-black py-5  text-center  "><img src="./eve2.png" alt="" /></div>
            <div className="bg-black py-5  text-center   "><img src="./eve5.png" alt="" /></div>
            <div className="bg-black py-5  text-center   "><img src="./eve4.png" alt="" /></div>
            <div className="bg-black py-5  text-center  "><img src="./eve1.png" alt="" /></div>
            <div className="bg-black py-5  text-center "><img src="./eve3.png" alt="" /></div>
            
    
        </div>
        </>
    );
}