
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardHeader, CardBody, Image, Divider } from "@nextui-org/react";

import { Carousel } from 'react-responsive-carousel';

export default function Vision() {
    return (
        <div>

                  <div className="flex flex-col justify-between h-full">

            <Card className="max-w-[780px] bg-green-200 justify-center mt-4 float-right">
              <CardHeader className="flex gap-3 justify-center">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md justify-center">Our Vision</p>
                  <p className="text-small text-default-500 justify-center">A Global Education Institute</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="h-[400px] mr-5 ml-3 mt-5 bg-transparent">Make beautiful dreams Life with Us.
                  National Institute Of Technology, Silchar (राष्ट्रीय प्रौद्योगिकी संस्थान, सिलचर) is one of the 31 National Institutes of Technology of India and was established in 1967 as a Regional Engineering College in Assam. In 2002 it was upgraded to the status of National Institute of Technology and was declared as Institute of National Importance under the National Institutes of Technology Act, 2007.
                </p>
              </CardBody>
              <Divider />

            </Card>

          </div>
        </div>
        

    )
}