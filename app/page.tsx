'use client'

import { Carousel } from 'react-responsive-carousel';
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Tcard from "./Card";
import Text from "./text";
import Slide2 from "./slide2";


export default function home() {


	return (
		<div >
			
			<div> 
              
        <Carousel
          autoPlay
          showThumbs={false}
          interval={3000}
          infiniteLoop
          className="flex flex-col h-screen justify-end "> 
           
				<div key="image1"> 
            <img src="./ft1.jpeg" alt="image1" /> 
   
				</div> 
				<div> 
					<img src="./gb1.jpeg" alt="image2" /> 
				</div> 
				<div> 
					<img src="./lb1.jpeg" alt="image3"/>  
				</div>                              
				<div> 
					<img src="./sk1.jpg" alt="image4"/> 
				</div> 
				<div> 
					<img src="./ad1.jpeg" alt="image5"/>
				</div> 
			</Carousel> 
     
			
			
				<Tcard />
				  </div>
     
      <br />
      <div>
        	<Slide2/>
      </div>



			

    
		</div>
	);
}
		

