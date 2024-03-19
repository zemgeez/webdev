'use client'
import {Card, CardFooter, Image,CardBody, Button} from "@nextui-org/react";
import EventPage from "@/components/event";
<<<<<<< HEAD
import CardTop from "@/components/cardTp";
import { Carousel } from 'react-responsive-carousel';

import EventForm from "@/components/EventForm";

export default function BlogPage() {
	  return (
		
		<>
		<div>
			<CardTop/>
			<br />


			<div> 
			
			<Carousel
			  autoPlay
			  showThumbs={false}
			  interval={3000}
			  infiniteLoop
			  className="flex flex-col h-[250px] justify-end  "> 
					<div> 
						<img src="./eve1.png" alt="image1"/> 
						<p className="fullscreen">Image 1</p> 
	
					</div> 
					<div> 
						<img src="./eve3.png" alt="image2" /> 
						<p className="fullscreen">Image 2</p> 
	
					</div> 
					<div> 
						<img src="./eve4.png" alt="image3"/> 
						<p className="fullscreen">Image 3</p> 
	
					</div> 
					<div> 
						<img src="./eve7.png" alt="image4"/> 
						<p className="fullscreen">Image 4</p> 
	
					</div> 
					<div> 
						<img src="./eve8.png" alt="image5"/> 
						<p className="fullscreen">Image 5</p> 
	
					</div> 
				</Carousel> 
		  </div>












		   <div className=" my-80 ">
			   <EventPage/>
			
			
			</div>	

		</div>



</>
=======

export default function BlogPage() {
	  return (
		<div>
			<EventPage/>
			<EventPage/>
				<h1>hello</h1>
		</div>
>>>>>>> 05a62923c50f8c18aea47f3044daa7d8b6b01531
	  );
}


		



