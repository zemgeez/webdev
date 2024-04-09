'use client'
import {Card, CardFooter, Image,CardBody, Button} from "@nextui-org/react";

export default function EventPage() {
	
	const list = [
		{
		  title: "Event 1",
		  img: "./eve7.png",
		  Date: "5-10-2023",
		},
		{
		  title: "Event 2",
		  img: "./eve2.png",
		  Date: "05-10-2023",
		},
		{
		  title: "Event 3",
		  img: "./eve5.png",
		  Date: "5-10-2023",
		},
		{
		  title: "Event 4",
		  img: "./eve4.png",
		  Date: "05-10-2023",
		},
		{
		  title: "Event 5",
		  img: "./eve1.png",
		  Date: "05-10-2023",
		},
		{
		  title: "Event 6",
		  img: "./eve3.png",
		  Date: "05-10-2023",
		},
/*		{
		  title: "Event 7",
		  img: "/images/fruit-7.jpeg",
		  Date: "05-10-2023",
		},
		{
		  title: "Event 8",
		  img: "/images/fruit-8.jpeg",
		  Date: "05-10-2023",
		},
		{
		  title: "Event 9",
		  img: "/images/fruit-8.jpeg",
		  Date: "05-10-2023",
		},  */
	  ];
	
	  return (
		<>
		<div className=" container max-w  bg-blue-200 py-20 mx-0 ">
		<div className=" max-w bg-blue-900  mb-5 mt-0 mx-6 w-6/7 px-6 py-2 "><h1 className=" font-bold text-xl py-3 text-white ">Events </h1></div>

		<section className="flex-col mt-20 mx-20 bg-blue-900 ">
		<div className="flex-col mt-20 mx-20  max-w grid  gap-y-4 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-60 xl:grid-cols-3   ">
		  {list.map((item, index) => (
			<Card shadow="sm" className="h-[200px] w-[270px]" key={index} isHoverable onPress={() => console.log("item pressed")}>
			  <CardBody className="relative overflow-visible p-0 group" >
				<div>
					<Image
						shadow="sm"
						radius="lg"
						width="100%"
						alt={item.title}
						className="w-full object-cover h-[180px]   transition-opacity duration-300 opacity-100 group-hover:opacity-0"
						src={item.img}
					/>
					<div className="absolute h-full w-full  bg-black/80  -bottom-30 group-hover:bottom-0 opacity-0 group-hover:opacity-100 backdrop-blur-lg  transition-all duration-300" >
						<h1 className="  text-xl font-semibold pt-8 mx-16 text-amber-600">About event</h1>
						<p className=" text-sm mt-2 mx-6   text-white/25">The event is all about the photography.All the artist have thier own art form woth unique style.</p>
            		</div>
				</div>
					
						
			  </CardBody>
			  <CardFooter className="text-small py-2 text-white/60 justify-between bg-black">
				<b>{item.title}</b>
				<p className="text-default-500">{item.Date}</p>
			  </CardFooter>
			</Card>
		  ))}
		</div>
		</section>
		</div>	



		</>

		
	  );
}


		
