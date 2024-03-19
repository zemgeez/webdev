import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function Slide2() {
    return (
        
            <div className='flex gap-4'>
                    <h1 className='text-7xl font-mono px-2 '>Some Events</h1>
                <Carousel autoPlay showThumbs={false} interval={3000} infiniteLoop className=" mt-5 w-1/4 p-4  rounded-br-3xl  bg-slate-200">
                    <div>
                        <img src="./slide2.jpeg"  alt="image1"
                            />
                    </div>
                    <div>
                        <img src="./slide22.jpeg" alt="image2" />
                    </div>
                    <div>
                        <img src="./dep1.jpeg" alt="image3" />
                    </div>
                   
                </Carousel>
            
                
            </div>


          
        
         


        
    );
}