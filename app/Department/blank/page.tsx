'use client'
// import React from "react";
// import Carousel1 from "@/components/Carousel";
// import Slide2 from "@/components/slide2";
// import NIRF from "@/components/NIRF";
// export default function Tcard() {
//   return (



    
      
//         <div className="bg-black flex flex-wrap justify-center mt-20">
//           <div className=" container  w-full md:w-screen bg-white rounded-lg overflow-hidden shadow-lg m-4 md:flex lg:max-w-full">
           
//             <img
//               alt="Card background"
//               className="w-full md:w-2/3 lg:w-1/2"
//               src="./dr1.jpeg"
//             />
           
//             <div className="p-6 flex flex-col justify-center">
//               <div className="font-bold text-xl mb-4">Prof. Dilip Kumar Baidya</div>
//               <p className="text-gray-700 text-base">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officiis?
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officiis?
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officiis?
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officiis?
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, officiis?
//               </p>
//             </div>
//           </div>
//         </div>
      

       
    
//   );
// }



// -------------- above code is garbage---

// and belove is function code without class components

// 'use client'
// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Card, } from "@nextui-org/react";
// import { Carousel } from 'react-responsive-carousel';



// export default function abc(){


//     var Images = [
//         {
//             "title" : "img 1",
//             "img" : "./eve1.png"
//         },
//         {
//             "title" : "img 1",
//             "img" : "./eve2.png"
//         },
//         {
//             "title" : "img 1",
//             "img" : "./eve3.png"
//         },
//     ];

//     return(
        
//         <div className="container flex   bg-black/30 h-screen w-screen ">

//             <div className="container  w-1/2 ">
//                 <Card className="bg-white max-w-1/2 h-2/3 mt-10 ml-10 bg-transparent justify-left pb-4 px-4  ">
//                     <h1 className='text-3xl text-black font-medium mt-6 pb-4 px-2 bg-transparent w-full overflow-hidden whitespace-nowrap'>Ranking and Recognition </h1>
//                         <Carousel autoPlay showThumbs={false}   interval={3000} infiniteLoop className=" mt-18 w-full py-1 px-1 rounded-3xl  shrink-0">
//                         {
//                           Images.map((item)=> (
//                             <div className="rounded-xl">
//                                 <img src={item.img}  className ="aspect-video" alt={item.title} />
//                             </div>
                        
                        
//                         ))}
//                         </Carousel>
                    
//                 </Card>

//                 </div>

//             <section className="bg-white w-1/2 h-2/3 mt-10 ml-10">
//                 <div className=" bg-black/25 grid grid-rows-2  grid-cols-2  ">
//                         <div className="bg-black ">  hi there </div>
//                         <div className="bg-white/30"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illum totam laborum nostrum nulla ratione voluptas laudantium! Dignissimos consectetur facilis consequuntur veritatis similique quasi aperiam, ex esse eaque iure nesciunt. </div>
//                         <div className="bg-white/50"> hi there </div>
//                         <div className="bg-white/10 "><img src="./loco.png" alt="" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, laudantium unde ipsam tempora a neque omnis placeat quisquam nostrum libero voluptate! Error doloremque veritatis sapiente voluptates ipsum recusandae officiis dolorem! </div>
//                 </div>
//             </section>
                

            
//         </div>
//     );
// }

// ---------------



// ------------below code is with clss component ------


'use client'
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card } from "@nextui-org/react";
import { Carousel } from 'react-responsive-carousel';

export default class abc extends Component {
    render() {
        var Images = [
            {
                "title": "img 1",
                "img": "./eve1.png"
            },
            {
                "title": "img 1",
                "img": "./eve2.png"
            },
            {
                "title": "img 1",
                "img": "./eve3.png"
            },
        ];

        return (
            <div className="container flex bg-black/30 h-screen w-screen">
                <div className="container w-1/2">
                    <Card className="bg-white max-w-1/2 h-2/3 mt-10 ml-10 bg-transparent justify-left pb-4 px-4">
                        <h1 className='text-3xl text-black font-medium mt-6 pb-4 px-2 bg-transparent w-full overflow-hidden whitespace-nowrap'>Ranking and Recognition </h1>
                        <Carousel autoPlay showThumbs={false} interval={3000} infiniteLoop className="mt-18 w-full py-1 px-1 rounded-3xl shrink-0">
                            {Images.map((item) => (
                                <div className="rounded-xl" key={item.title}>
                                    <img src={item.img} className="aspect-video" alt={item.title} />
                                </div>
                            ))}
                        </Carousel>
                    </Card>
                </div>

                <section className="bg-white w-1/2 h-2/3 mt-10 ml-10">
                    <div className="bg-black/25 grid grid-rows-2 grid-cols-2">
                        <div className="bg-black">hi there</div>
                        <div className="bg-white/30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illum totam laborum nostrum nulla ratione voluptas laudantium! Dignissimos consectetur facilis consequuntur veritatis similique quasi aperiam, ex esse eaque iure nesciunt.</div>
                        <div className="bg-white/50">hi there</div>
                        <div className="bg-white/10 "><img src="./loco.png" alt="" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, laudantium unde ipsam tempora a neque omnis placeat quisquam nostrum libero voluptate! Error doloremque veritatis sapiente voluptates ipsum recusandae officiis dolorem!</div>
                    </div>
                </section>
            </div>
        );
    }
}










// ---------------------------------  New Slider contains 3 img in one slides----------------



// import React, { Component } from 'react';

// interface CarouselState {
//   currentIndex: number;
// }

// class Carousel extends Component<{}, CarouselState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       currentIndex: 0,
//     };
//   }

//   prevSlide = () => {
//     const images = [
//       "image1.jpg",
//       "image2.jpg",
//       "image3.jpg",
//       "image4.jpg",
//       "image5.jpg",
//       "image6.jpg"
      
//     ];

//     this.setState((prevState) => ({
//       currentIndex: (prevState.currentIndex - 3 + images.length) % images.length
//     }));
//   };

//   nextSlide = () => {
//     const images = [
//       "./eve1.png",
//       "./eve2.png",
//       "./eve3.png",
//       "./eve4.png",
//       "./eve5.png",
//       "./eve6.png"
     
//     ];

//     this.setState((prevState) => ({
//       currentIndex: (prevState.currentIndex + 3) % images.length
//     }));
//   };

//   render() {
//     const { currentIndex } = this.state;
//     const images = [
//       "./eve7.png",
//       "./eve8.png",
//       "./dep1.jpeg",
//       "./dep2.jpeg",
//       "./dr1.jpeg",
//       "./eve1.png"
     
//     ];

//     return (
//       <div className="relative">
//         <button className="absolute left-0 top-1/2 transform -translate-y-1/2" onClick={this.prevSlide}>
//           Previous
//         </button>
//         <div className="flex justify-center items-center">
//           {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
//             <img key={index} className="max-w-full mx-1" src={image} alt="carousel" />
//           ))}
//         </div>
//         <button className="absolute right-0 top-1/2 transform -translate-y-1/2" onClick={this.nextSlide}>
//           Next
//         </button>
//       </div>
//     );
//   }
// }

// export default Carousel;
