'use client'
import { Textarea } from "@nextui-org/react";
import { Carousel } from 'react-responsive-carousel';
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Tcard from "./Card";



export default function home() {


	return (
		<div >
			

      
			<div > 
			
			<Carousel className="flex flex-col h-screen justify-end"> 
				<div> 
					<img src="./ft1.jpeg" alt="image1"/> 
					<p className="legend">Image 1</p> 

				</div> 
				<div> 
					<img src="./gb1.jpeg" alt="image2" /> 
					<p className="legend">Image 2</p> 

				</div> 
				<div> 
					<img src="./lb1.jpeg" alt="image3"/> 
					<p className="legend">Image 3</p> 

				</div> 
				<div> 
					<img src="./sk1.jpg" alt="image4"/> 
					<p className="legend">Image 4</p> 

				</div> 
				<div> 
					<img src="./ad1.jpeg" alt="image5"/> 
					<p className="legend">Image 5</p> 

				</div> 
			</Carousel> 
      </div> 
      <br></br>
      <Tcard />
     
      <div>
 
      



	 <Textarea 
      variant="bordered"
      defaultValue={"A Institute of National Importance under Ministry of Education, Government of India"}
      
        className="flex flex-col h-screen justify-end"
        data-hover color= "secondary"
    />

      </div>
      </div>
    
	);
}
		

