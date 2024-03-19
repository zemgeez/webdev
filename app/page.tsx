'use client'

import { Carousel } from 'react-responsive-carousel';
import React from "react";
import '../styles/globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Tcard from "./Card";
import { TypeAnimation } from 'react-type-animation';
import Accord from '@/components/acco';
import Cardd from '@/components/cards';
import SimpleMap from '@/components/map';

export default function home() {
	return (
		<>
		
			<div className='grid grid-row-4  pt-5'>
				<div>
					<div className="flex w-full marquee-container justify-end" style={{ zIndex: 1 }}>
						<div className="marquee text-7xl text-gray-500 font-light  ">
							
							<p>Welcome to </p>
   									 NIT SILCHAR
								
							
     
      </div>
    </div>
					<Carousel
						autoPlay
						showThumbs={false}
						interval={3000}
						infiniteLoop
						className="flex flex-col h-screen justify-end mb-4 ">
						<div key="image1">
							<img src="./ft1.jpeg" alt="image1" />
						</div>
						<div>
							<img src="./gb1.jpeg" alt="image2" />
						</div>
						<div>
							<img src="./lb1.jpeg" alt="image3" />
						</div>
						<div>
							<img src="./sk1.jpg" alt="image4" />
						</div>
						<div>
							<img src="./ad1.jpeg" alt="image5" />
						</div>
					</Carousel>
				</div>
				<br />
				<div>
					<Tcard />
				</div>
				<br />
				<div className='mt-10 mb-10'>
					<TypeAnimation
						sequence={[
							// Same substring at the start will only be typed out once, initially
							'Development is Nature',
							1000, // wait 1s before replacing "Mice" with "Hamsters"
							'Development is Future',
							1000,
							'Development is Life',
							1000,
							'We are NIT Silchar',
							1000
						]}
						wrapper="span"
						speed={50}
						style={{ fontSize: '4em', display: 'inline-block', color: 'black' }}
						repeat={Infinity}
					/>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row gap-2">
				<Accord />
				<Cardd />
				<SimpleMap />
			</div>
		</>
	);
}
		

