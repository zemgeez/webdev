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
import MediaC from '@/components/MediaC';


export default function home() {
	return (
				
			
		
			
		

		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<Carousel1 />
				
			<div className="inline-block max-w-5xl text-center justify-center">
		<Tcard />
				
			
				<Vision />
				<MCover />
				
				<LastDiv/>
			
				
		
				
			</div>
		</section>
				
		
	);
		
}
