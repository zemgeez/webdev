import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, } from "@nextui-org/react";
import { Carousel } from 'react-responsive-carousel';


export default function UpcomingEvents() {
  return (<>
    <div className="grid grid-cols-2 py-10">
      <div className="grid grid-cols-1 px-4">
         <Card className="max-w-1/3 bg-transparent justify-center pb-4 px-4  ">
          <h1 className='text-3xl text-black font-sans px-2  bg-transparent w-1/2'>Upcoming Events</h1>
          <Carousel autoPlay showThumbs={false}   interval={3000} infiniteLoop className=" mt-1 w-full py-1 px-1 rounded-3xl  shrink-0">
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
      </div>
      <div className="w-full px-4">
       
        <div className="grid grid-rows-2">
          <div className="text-white text-center mt-auto text-3xl h-1/3 bg-slate-400 rounded-lg">Seminar</div>
          <Carousel autoPlay showThumbs={false} interval={3000} infiniteLoop  axis="vertical" className=" mt-1 h-full w-full py-1 px-1 rounded-3xl  shrink-0 ">
          <div className="text-sm text-white overflow-y-auto px-4 rounded-lg max-h-40 scrollbar-hide justify-items-center justify-center bg-green-400">
            <p>Department of Computer Science and Engineering</p>
            <p>Topic: Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque magnam alias officia tempora vitae, eius impedit! Exercitationem laborum commodi sint, alias voluptates facilis incidunt soluta qui? Placeat nam nihil incidunt accusantium repellendus numquam cupiditate est ipsam mollitia? Quasi velit amet magni quae voluptatem illum suscipit quidem consequuntur corrupti soluta?</p>
            <p>Speaker: Dr. A. K. Singh</p>
            <p>Date: 12th August, 2021</p>
            <p>Time: 11:00 AM</p>
            <p>Venue: Seminar Hall</p>
               <p>Department of Computer Science and Engineering</p>
            <p>Topic: Machine Learning</p>
            <p>Speaker: Dr. A. K. Singh</p>
            <p>Date: 12th August, 2021</p>
            <p>Time: 11:00 AM</p>
            <p>Venue: Seminar Hall</p>
          </div>


 <div className="text-sm text-white overflow-y-auto px-4 rounded-lg max-h-40 scrollbar-hide justify-items-center justify-center bg-green-800">
            <p>Department of Computer Science and Engineering</p>
            <p>Topic: Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque magnam alias officia tempora vitae, eius impedit! Exercitationem laborum commodi sint, alias voluptates facilis incidunt soluta qui? Placeat nam nihil incidunt accusantium repellendus numquam cupiditate est ipsam mollitia? Quasi velit amet magni quae voluptatem illum suscipit quidem consequuntur corrupti soluta?</p>
            <p>Speaker: Dr. A. K. Singh</p>
            <p>Date: 12th August, 2021</p>
            <p>Time: 11:00 AM</p>
            <p>Venue: Seminar Hall</p>
               <p>Department of Computer Science and Engineering</p>
            <p>Topic: Machine Learning</p>
            <p>Speaker: Dr. A. K. Singh</p>
            <p>Date: 12th August, 2021</p>
            <p>Time: 11:00 AM</p>
            <p>Venue: Seminar Hall</p>
            </div>
          </Carousel>
          

 <Carousel autoPlay showThumbs={false} interval={3000} infiniteLoop  axis="vertical" className=" mt-1 h-full w-full py-1 px-1 rounded-3xl  shrink-0 ">
          <div className="text-sm text-white overflow-y-auto px-4 rounded-lg max-h-40 scrollbar-hide justify-items-center justify-center bg-green-400">
            <p>Department of Computer Science and Engineering</p>
            <p>Topic: Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque magnam alias officia tempora vitae, eius impedit! Exercitationem laborum commodi sint, alias voluptates facilis incidunt soluta qui? Placeat nam nihil incidunt accusantium repellendus numquam cupiditate est ipsam mollitia? Quasi velit amet magni quae voluptatem illum suscipit quidem consequuntur corrupti soluta?</p>
            <p>Speaker: Dr. A. K. Singh</p>
            <p>Date: 12th August, 2021</p>
            <p>Time: 11:00 AM</p>
            <p>Venue: Seminar Hall</p>
               <p>Department of Computer Science and Engineering</p>
            <p>Topic: Machine Learning</p>
            <p>Speaker: Dr. A. K. Singh</p>
            <p>Date: 12th August, 2021</p>
            <p>Time: 11:00 AM</p>
            <p>Venue: Seminar Hall</p>
          </div>


 <div className="text-sm text-white overflow-y-auto px-4 rounded-lg max-h-40 scrollbar-hide justify-items-center justify-center bg-green-800">
            <p>Department of Computer Science and Engineering</p>
            <p>Topic: Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque magnam alias officia tempora vitae, eius impedit! Exercitationem laborum commodi sint, alias voluptates facilis incidunt soluta qui? Placeat nam nihil incidunt accusantium repellendus numquam cupiditate est ipsam mollitia? Quasi velit amet magni quae voluptatem illum suscipit quidem consequuntur corrupti soluta?</p>
            <p>Speaker: Dr. A. K. Singh</p>
            <p>Date: 12th August, 2021</p>
            <p>Time: 11:00 AM</p>
            <p>Venue: Seminar Hall</p>
               <p>Department of Computer Science and Engineering</p>
            <p>Topic: Machine Learning</p>
            <p>Speaker: Dr. A. K. Singh</p>
            <p>Date: 12th August, 2021</p>
            <p>Time: 11:00 AM</p>
            <p>Venue: Seminar Hall</p>
            </div>
               </Carousel>

        </div>
   

      </div>
</div>
      </>
    )
}