'use client'
import {Card, CardFooter, Image,CardBody, Button} from "@nextui-org/react";

export default function AboutPage() {
	const list = [
		{
		  title: "Event 1",
		  img: "/images/fruit-1.jpeg",
		  Date: "5-10-2023",
		},
		{
		  title: "Event 2",
		  img: "/images/fruit-2.jpeg",
		  Date: "05-10-2023",
		},
		{
		  title: "Event 3",
		  img: "/images/fruit-3.jpeg",
		  Date: "5-10-2023",
		},
		{
		  title: "Event 4",
		  img: "/images/fruit-4.jpeg",
		  Date: "05-10-2023",
		},
		{
		  title: "Event 5",
		  img: "/images/fruit-5.jpeg",
		  Date: "05-10-2023",
		},
		{
		  title: "Event 6",
		  img: "/images/fruit-6.jpeg",
		  Date: "05-10-2023",
		},
		{
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
		},
	  ];
	
	  return (
		<div className="gap-1 grid grid-cols-2 sm:grid-cols-3">
		  {list.map((item, index) => (
			<Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
			  <CardBody className="overflow-visible p-0">
				<Image
				  shadow="sm"
				  radius="lg"
				  width="100%"
				  alt={item.title}
				  className="w-full object-cover h-[140px]"
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
	  );
}


		



