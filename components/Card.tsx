import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardHeader, CardBody, Image, Divider, CardFooter } from "@nextui-org/react";




export default function Tcard() {
  return (
    
     
      
    <Card className="container  bg-transparent columns-lg p-8 md:pb-4 hover:bg-green-200 ">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-sm hover:text-3xl uppercase font-bold">Director</p>

                <h4 className="font-bold text-large">Prof. Dilip Kumar Baidya</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2 ">
                <div className="flex">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl ml-1"
                    src="./dr1.jpeg"
                    width={500}
                    height={600}
                  />

                  <CardFooter className=" inline gap-2">
                    
                     National Institute Of Technology, Silchar (राष्ट्रीय प्रौद्योगिकी संस्थान, सिलचर) is one of the 31 National Institutes of Technology of India and was established in 1967 as a Regional Engineering College in Assam. In 2002 it was upgraded to the status of National Institute of Technology and was declared as Institute of National Importance under the National Institutes of Technology Act, 2007.
                    
                  </CardFooter>
                </div>
              </CardBody>
            </Card>

       


  );
}
