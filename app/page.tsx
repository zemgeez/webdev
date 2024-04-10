'use client'


import { Carousel } from 'react-responsive-carousel';
import React from "react";
import '../styles/globals.css'
import SimpleMap from '@/components/map';
import Accord from '@/components/acco';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Tcard from "../components/Card";
import { TypeAnimation } from 'react-type-animation';
import MCover from '@/components/MCover';
import LastDiv from '@/components/LastDiv';
import Mission from '@/components/cardmission';
import Vision from '@/components/cardvision';
import Cardd from '@/components/cards';
import UpcomingEvents from '@/components/upcomingeve';
import { Input } from '@nextui-org/input';
import { Kbd } from '@nextui-org/kbd';
import { SearchIcon } from '@/components/icons';
import { NavigationMenuDemo } from '@/components/Nav2';

import ViMi from '@/components/VisionM';  
// imported by shubham

const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bordered bg-transparent rounded-full  border-black-4 ",
				input: "text-lg",
			}}
			endContent={
				<Kbd className="hidden lg:block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="flex text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

export default function home() {
	return (
	<div>	
			<div className='grid grid-row-7  mb-0 w-full'>
			
			
					
					

				
					
							
							<div className=" flex absolute top-28 left-0 w-full h-1/2  pl-24 items-start justify-start">
								<div className="text-5xl  text-white to-slate-500 font-light  z-10 ">
							NATIONAL INSTITUTE OF TECHNOLOGY
							<p className='items-start justify-start text-xl font-medium from-current to-green-300  text-white mb-10'>An Institute Of National Importence</p>
						</div>
						
					</div>
					<br />
						
							<div className=' absolute top-22 pt-5 w-full h-1/2 flex items-center justify-center bg-white'>
							
									
									<NavigationMenuDemo/>
								</div>
						
						
							
								
					
    
					
		
						

					<div className='grid grid-row-4'>
						<section className='bg-blue-600' >
							
						
							
							<Carousel
								autoPlay
								showThumbs={false}
								interval={3000}
								infiniteLoop
								className="flex flex-col h-3/5 justify-end mb-4 ">
								<div key={1}>
									<img src="./ft1.jpeg" alt="image1" />
								</div>
								<div key={2}>
									<img src="./gb1.jpeg" alt="image2" />
								</div>
								<div key={3}>
									<img src="./lb1.jpeg" alt="image3" />
								</div>
								<div key={4}>
									<img src="./sk1.jpg" alt="image4" />
								</div>
								<div key={5}>
									<img src="./ad1.jpeg" alt="image5" />
								</div>
							</Carousel>
							
						</section>

						<ViMi />

						
						<br />
						<div>
							<Tcard />
						</div>
						<Vision />
						<div className='flex w-full justify-end'>
							<div className='mt-10 mb-10 '>
								<TypeAnimation
									sequence={[
										'Development is Nature',
										1000,
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
							<Mission />
						</div>
						<br />
						<br />
						<UpcomingEvents />
						<MCover />
						<LastDiv />
					</div>

					<div className="flex flex-col max-h-96 sm:flex-row gap-2 px-4 border py-4">
						<Accord />
						<Cardd />
						<SimpleMap />
					</div>
				</div>
			</div>
	);
		
}
