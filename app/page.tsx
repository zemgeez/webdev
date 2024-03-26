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
import UpcomingEvents from '@/components/upcomingeve';
import Vision from '@/components/cardvision';
import { SearchIcon } from '@/components/icons';
import { Input } from '@nextui-org/input';
import { Kbd } from '@nextui-org/kbd';

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
		<>
			<div>
				<div className='grid grid-row-7  mb-0 w-full'>
					<div className="relative">
						<div className='flex flex-col w-full justify-end items-end pt-1 mb-1'>
							<div className='text-white z-10 w-1/2 '>
								{searchInput}
							</div>
						</div>
					</div>

					<div className='grid grid-row-4'>
						<div>
							<Carousel
								autoPlay
								showThumbs={false}
								interval={3000}
								infiniteLoop
								className="flex flex-col h-3/5 justify-end mb-4 ">
								<div>
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
						<div className="flex flex-col max-h-96 sm:flex-row gap-2 px-4 border py-4">
						<Accord />
						<Tcard />
						<SimpleMap />
					</div>
						<MCover />
						<LastDiv />
					</div>

					
				</div>
			</div>
		</>
	);
		
}
