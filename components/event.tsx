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
		<section className="w-screen grid">
		<div className="gap-4 grid    grid-cols-3 xl:grid-cols-3">
		  {list.map((item, index) => (
			<Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
			  <CardBody className="overflow-visible p-0">
				<Image
				  shadow="sm"
				  radius="lg"
				  width="100%"
				  alt={item.title}
				  className="w-full object-cover h-[240px] w-[400px]"
				  src={item.img}
				/>
			  </CardBody>
			  <CardFooter className="text-small justify-between">
				<b>{item.title}</b>
				<p className="text-default-500">{item.Date}</p>
			  </CardFooter>
			</Card>
		  ))}
		</div>
		</section>
	  );
}


		



