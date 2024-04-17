import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardHeader, CardBody, Image, Divider, CardFooter } from "@nextui-org/react";

import { Carousel } from 'react-responsive-carousel';
import { px } from "framer-motion";


export default function Tcard() {
  return (
    
      <div>
        <div className="flex-row">
          <div className="flex-col">
            <Card className="py-4 ">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Director</p>

                <h4 className="font-bold text-large">Prof. Dilip Kumar Baidya</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2 ">
                <div className="flex">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl ml-1"
                    src="./dr1.jpeg"
                    width={570}
                    height={600}
                  />

                  <CardFooter className=" inline gap-2">
                    <h3>
                    With a vision to train and transform young professionals into responsible citizens engaging themselves for the betterment of the society, NIT Silchar has come a long way from being a REC to brand- NITS
                    </h3>
                  </CardFooter>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="flex flex-col justify-between h-full">

            <Card className="max-w-[780px] bg-transparent justify-center mt-4 float-right">
              <CardHeader className="flex gap-3 justify-center">
                <Image
                  alt="nextui logo"
                  height={60}
                  radius="sm"
                  src="./vision.jpg"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md justify-center text-black">Our Vision</p>
                  <p className="text-small text-black justify-center"></p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="h-[400px] mr-5 ml-3 mt-5 bg-transparent text-black">To become an internationally acclaimed institution of higher learning that will serve as a source of knowledge and expertise for the society and be a preferred destination for undergraduate and graduate studies.
                </p>
              </CardBody>
              <Divider />

            </Card>

          </div>
        </div>


        <Card className="max-w-[780px] bg-green-600 justify-center mt-10 float-right  ">
          <CardHeader className="flex gap-3 justify-center">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="./mission.jpg"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md justify-center text-black">Our Mission</p>
              <p className="text-small text-default-500 justify-center  ">
</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="h-[400px] mr-5 ml-3 mt-5 bg-transparent text-black ">To advance and spread knowledge in the area of science and technology leading to creation of wealth and welfare of humanity.
            </p>
          </CardBody>
          <Divider />

        </Card>
        <br />


        


          <Card className="max-w-1/3 bg-transparent justify-center mt-10 float-left mb-8 ">
          <h1 className='text-7xl font-mono px-2 '>Overview</h1>
          <Carousel autoPlay showThumbs={false} interval={3000} infiniteLoop className=" mt-5 w-1/3 py-10 px-5 rounded-3xl  bg-yellow-200">
            <div className="rounded-xl">
              <img src="./slide2.jpeg" alt="image1" />
            </div>
           <div className="rounded-xl">
              <img src="./slide22.jpeg" alt="image2" />
            </div>
           <div className="rounded-xl">
              <img src="./dep1.jpeg" alt="image3" />
            </div>

          </Carousel>
      </Card>
      
       
      
        </div>


  );
}
