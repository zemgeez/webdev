import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, } from "@nextui-org/react";
import { Carousel } from 'react-responsive-carousel';


export default function UpcomingEvents() {
    return ( 
         <Card className="max-w-1/3 bg-transparent justify-center mt-10 float-left mb-8 ">
          <h1 className='text-6xl font-mono px-2  bg-red-500 w-1/2'>Upcoming Events</h1>
          <Carousel autoPlay showThumbs={false} interval={3000} infiniteLoop className=" mt-5 w-1/2 py-10 px-5 rounded-3xl ">
            <div className="rounded-xl">
              <img src="./slide2.jpeg"  className ="aspect-video" alt="image1" />
            </div>
           <div className="rounded-xl">
              <img src="./slide22.jpeg"  className ="aspect-video"alt="image2" />
            </div>
           <div className="rounded-xl">
              <img src="./dep1.jpeg"  className ="aspect-video" alt="image3" />
            </div>

          </Carousel>
      </Card>
     
    )
}