'use client'
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react"
import SimpleMap from "../components/map";
import { Card,  CardBody,  Image,  } from "@nextui-org/react";




export default function Noti() {
   const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  
    return (
      
    
        <div className="grid grid-cols-2 w-full   px-5    gap-1  ">
          <div className='w/2    border rounded-lg mt-4 mb-4 bg-green-300'>
            
           
            
              <Accordion variant="shadow" className="text-md px-3 py-5 h-full max-h-80 overflow-y-auto ">
      <AccordionItem key="1" aria-label="Notice" title="Notification  ">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Notice 1" title="Notification">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Notice 2" title="Notification">
        {defaultContent}
              </AccordionItem>
              <AccordionItem key="4" aria-label="Notice 3" title="Notification">
        {defaultContent}
              </AccordionItem>
              <AccordionItem key="5" aria-label="Notice 4" title="Notification">
        {defaultContent}
              </AccordionItem>
              <AccordionItem key="6" aria-label="Notice 5" title="Notification">
        {defaultContent}
              </AccordionItem>
        
            
              
               
    </Accordion>

              
          </div>
        

          <div className='w/3  h-screen mt-4 mb-4 border rounded-xl gap-3 ' >
          
          <div  className="flex gap-2 h-full py-2  ">
                <Card className="flex h-full w-1/2 rounded-xl  shadow-lg mb-4">
                    <CardBody className="rounded-xl overflow-hidden ">
                  
        
                    
                  <Image
        				className="h-full px-1 mt-1 hover:scale-105 transition duration-500 ease-in-out rounded-xl "
                            src="./img (1).jpeg" alt="your image"  />
                       
                    
                </CardBody>
               
                       
                         
                </Card>
 
		<Card className="flex max-h-full   w/2 rounded-xl shadow-lg mb-1">
                <CardBody className=" rounded-lg overflow-hidden" >
                  	
                <Image
                className="h-full px-1 mt-1 hover:scale-105 transition duration-500 ease-in-out rounded-xl "
                src="./img2 (1).jpeg" alt="your image" />
              
            </CardBody>

              </Card>
              
		</div>
          
          </div>
          
          <div className='w/3 bg-slate-400 h-fit justify-center mt-4 mb-4'>
                    <SimpleMap/>
      </div>
        

          </div>
           
     
       
       
      
    );
  }

