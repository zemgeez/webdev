'use client'
import { title } from "@/components/primitives";
import {Image} from "@nextui-org/react";
import { Card, CardHeader,  CardFooter } from "@nextui-org/card";
import { image } from "@nextui-org/theme";

export default function AboutPage() {
	return (

		
			<div>
			
			<Card className=" bg-slate-600 shadow-lg">
				<Image

					
      isZoomed
      width={240}
      alt="NextUI Fruit Image with Zoom"
      src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
    />
				<CardHeader>
					 
					<h1 className={title()}>
					Header
				</h1></CardHeader>
				
					<CardFooter >
						<h5 className={title({size:"sm"})}>
						</h5>Footer</CardFooter>
			</Card>
			
			
		</div>
		
	);
}





		



