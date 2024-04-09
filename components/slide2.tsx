'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function Slide2() {
    return (
        
            <div className='flex gap-4'>
   
                <Carousel autoPlay showThumbs={false} interval={3000} infiniteLoop className=" mt-0 w-1/4 p-2  rounded-br-xl  bg-slate-200">
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