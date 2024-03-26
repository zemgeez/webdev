'use client'
import React from "react";
// import { title } from "@/components/primitives";


export default function MediaC(){


    return(

    <div className="bg-white px-14  ">

        <div className="bg-white w-fit mt-5 ">
            <h1 className="  text-black font-bold text-xl ">Media Coverage</h1>
        </div>

		<div className="grid grid-cols-3  gap-3 mt-5">
		 <div className="bg-gray-200 p-1">
		 <img 
				className="h-full w-full"
                src="./ad1.jpeg" alt="your image" />
			</div>
		 <div className="bg-gray-200 p-1">
		 <img 
				className="h-full w-full"
                src="./dep1.jpeg" alt="your image" />
		 </div>
		 <div className="bg-gray-200 p-1">
		 <img 
				className="h-full w-full"
                src="./dep2.jpeg" alt="your image" />
				</div>
		 <div className="bg-gray-200 p-1">
		 <img 
				className="h-full w-full"
                src="./dep3.jpeg" alt="your image" />
				</div>
		 <div className="bg-gray-200 p-1">
		 <img 
				className="h-full w-full"
                src="./dr1.jpeg" alt="your image" />
				</div>
		 <div className="bg-gray-200 p-1">
		 <img 
				className="h-full w-full"
                src="./eve1.jpeg" alt="your image" />
				</div>

          <button className=" bg-blue-700 font-semibold text-white  mb-5 w-20 h-10 ">
                <h1> Next  </h1>
          </button>
	
		  
		</div>

        </div>


    );
}