'use client'
// --------------
// 'use client'
// import React from "react"
// import NavMenu from "@/components/NavMenu";
// import NavLinks from "@/components/NavLinks";
// import MediaC from "@/components/MediaC";
// import MCover from "@/components/MCover";
// import BasicExample from "@/components/CmOne";
// import LastDiv from "@/components/LastDiv";
// import  CarouselTransition  from "@/components/BestSlider";

// import BestSlider from "@/components/BestSlider";

// --------------------------

// import FlipCard from "@/components/Test1";


// -------------
// export default function DepartmentPage(){
//     return( 
//         <>
//         <div className=" grid grid-rows-3">



//         <div><NavMenu/></div>
// ------------------
       
{/* <div className="bg-white "><BasicExample/></div> */}
        
{/* ------------------------------ */}
{/* <div>
<LastDiv/>
</div>

<div>
<MediaC/>
</div>

<div>
<MCover/>
</div> */}

{/* ----------------------- */}

{/* <div>
<BestSlider/>
</div> */}



// components/ImageSwap.js

{/* 
    <div className="relative group bg-slate-600">
      <img src="/ad1.jpeg" alt="First Image" className="w-64 h-64 object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
      <img src="/eve1.png" alt="Second Image" className="w-64 h-64 object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0" />
    </div> */}



{/* <div>

        <div id="controls-carousel" className="relative w-full" data-carousel="static">
            {/* <!-- Carousel wrapper --> 
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* <!-- Item 1 --> 
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="./img3Copy.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                {/* <!-- Item 2 --> 
                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src="./ok1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                {/* <!-- Item 3 --> 
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="./img3Copy.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                {/* <!-- Item 4 --> 
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="./img3Copy.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                {/* <!-- Item 5 --> 
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="./img3Copy.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
            </div>
            {/* <!-- Slider controls --> 
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

</div> */}






{/* <div><FlipCard/></div> */}

{/* ------------------ */}

        {/* </div>
       
       

       
        

        

        </>
    ); */}
// }
// -------------------





import React, { Component } from "react";
import NavMenu from "@/components/NavMenu";
import NavLinks from "@/components/NavLinks";
import MediaC from "@/components/MediaC";
import MCover from "@/components/MCover";
import BasicExample from "@/components/CmOne";
import LastDiv from "@/components/LastDiv";
import CarouselTransition from "@/components/BestSlider";
import BestSlider from "@/components/BestSlider";
// import FlipCard from "@/components/Test1";

 class DepartmentPage extends React.Component {
    render() {
        return (
            <div className="grid grid-rows-3">
                <div><NavMenu /></div>
                {/* <div className="bg-white"><BasicExample/></div> */}
                <div><LastDiv /></div>
                <div><MediaC /></div>
                <div><MCover /></div>
            </div>
        );
    }
}
export default DepartmentPage