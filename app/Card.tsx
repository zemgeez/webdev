import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardHeader, CardBody, Image, Divider, CardFooter } from "@nextui-org/react";




export default function Tcard() {
  return (
    
     
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo cumque cum incidunt, labore possimus corrupti obcaecati autem dolores ipsum ullam modi aliquam dolorem at, ad aliquid. Rem nobis quidem consequuntur!
                    </h3>
                  </CardFooter>
                </div>
              </CardBody>
            </Card>
          </div>
    
</div>

       


  );
}
