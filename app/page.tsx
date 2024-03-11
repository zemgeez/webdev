'use client'
import { Textarea } from "@nextui-org/react";
import { Carousel } from 'react-responsive-carousel';
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Card, CardHeader, CardBody, Image,Divider,Link,image,CardFooter} from "@nextui-org/react";


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
      <div>
        
  <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Director</p>
   
        <h4 className="font-bold text-large">Prof. Dilip Kumar Baidya</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="./dr1.jpeg"
          width={270}
            />
            <br />

              <Textarea
        
      variant="underlined"
      defaultValue={"A Institute of National Importance under Ministry of Education, Government of India"}
	data-hover color="success"
        />
        

      </CardBody>
    </Card>
<br></br>

      </div>
    
    <Card className="max-w-[400px] ">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Our Vision</p>
          <p className="text-small text-default-500">A Global Education Institute</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody >
          <p className="h-[400px] mr-5 ml-3 mt-5" >Make beautiful dreams Life with Us.
            National Institute Of Technology, Silchar (राष्ट्रीय प्रौद्योगिकी संस्थान, सिलचर) is one of the 31 National Institutes of Technology of India and was established in 1967 as a Regional Engineering College in Assam. In 2002 it was upgraded to the status of National Institute of Technology and was declared as Institute of National Importance under the National Institutes of Technology Act, 2007.
        </p>
      </CardBody>
      <Divider/>
     
    </Card>
      

      
      
			


	
      
      
     
      



	 <Textarea 
      variant="bordered"
      defaultValue={"A Institute of National Importance under Ministry of Education, Government of India"}
      
        className="flex flex-col h-screen justify-end"
        data-hover color= "secondary"
    />

    </div>
    
	);
}
		



