'use client'

import Carousel1 from '@/components/Carousel';
import React from "react";
import '../styles/globals.css'
import SimpleMap from '@/components/map';
import Accord from '@/components/acco';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Tcard from "../components/Card";

import MCover from '@/components/MCover';
import LastDiv from '@/components/LastDiv';
import Mission from '@/components/cardmission';
import Vision from '@/components/cardvision';
import Cardd from '@/components/cards';
import UpcomingEvents from '@/components/upcomingeve';
import Ani from '@/components/Ani';
import Footer from '@/components/footer';


export default function home() {
	return (<>
		<main className="container mx-auto pt-0 px-1 flex-grow  justify-center items-center">
						
			
			<section className=' bg-cover absolute top-0 aspect-video justify-center items-center '>
				<Carousel1 />
				<br />
				<Ani text={['Development is Nature', 'Development is Future', 'Development is Life', 'We are NIT Silchar']} />
				<br />
				<Tcard />
			
				<Vision />
				
				<Footer/>
				
			</section>
									
		
			
		</main>
			
		
				
		</>
	);
		
}
