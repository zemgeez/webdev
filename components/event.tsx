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
		<section className="flex-col mt-0 ">
		<div className="grid gap-8 gap-x-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-10 ml-10   ">
		  {list.map((item, index) => (
			<Card shadow="sm" className="h-[200px] w-[270px]" key={index} isHoverable onPress={() => console.log("item pressed")}>
			  <CardBody className="relative overflow-visible p-0 group" >
				<Image
				  shadow="sm"
				  radius="lg"
				  width="100%"
				  alt={item.title}
				  className="w-full object-cover h-[180px] "
				  src={item.img}
				/>
					
						
			  </CardBody>
			  <CardFooter className="text-small text-white justify-between bg-black">
				<b>{item.title}</b>
				<p className="text-default-500">{item.Date}</p>
			  </CardFooter>
			</Card>
		  ))}
		</div>
		</section>



		</>

		
	  );
}


		
