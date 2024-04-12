'use client'
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import SimpleMap from "./map";
import { Card, CardBody, Image } from "@nextui-org/react";

export default function Noti() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
      <div className="w-full sm:w-1/2 lg:w-full mb-4">
        <Accordion
          variant="shadow"
          className="text-md px-3 py-5 h-full max-h-80 overflow-y-auto border rounded-lg bg-green-300"
        >
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <AccordionItem
              key={index}
              aria-label={`Notice ${index}`}
              title={`Notification ${index}`}
            >
              {defaultContent}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 px-5">
  <div className="w-full sm:w-1/2 lg:w-full mb-4">
    <Card className="rounded-xl shadow-lg">
      <CardBody className="rounded-xl overflow-hidden">
        <Image
          className="h-full w-full object-cover hover:scale-105 transition duration-500 ease-in-out rounded-xl"
          src="./img (1).jpeg"
          alt="your image"
        />
      </CardBody>
    </Card>
  </div>

  <div className="w-full sm:w-1/2 lg:w-full mb-4">
    <Card className="rounded-xl shadow-lg">
      <CardBody className="rounded-lg overflow-hidden">
        <Image
          className="h-full w-full object-cover hover:scale-105 transition duration-500 ease-in-out rounded-xl"
          src="./img2 (1).jpeg"
          alt="your image"
        />
      </CardBody>
    </Card>
  </div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 px-5">
  <div className="w-full sm:w-1/2 lg:w-full mb-4">
    <Card className="rounded-xl shadow-lg">
      <CardBody className="rounded-xl overflow-hidden">
        <Image
          className="h-full w-full object-cover hover:scale-105 transition duration-500 ease-in-out rounded-xl"
          src="./img (1).jpeg"
          alt="your image"
        />
      </CardBody>
    </Card>
  </div>

  <div className="w-full sm:w-1/2 lg:w-full mb-4">
    <Card className="rounded-xl shadow-lg">
      <CardBody className="rounded-lg overflow-hidden">
        <Image
          className="h-full w-full object-cover hover:scale-105 transition duration-500 ease-in-out rounded-xl"
          src="./img2 (1).jpeg"
          alt="your image"
        />
      </CardBody>
    </Card>
  </div>
</div>



</div>

  );
}
