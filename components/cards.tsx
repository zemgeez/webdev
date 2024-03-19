
import { Card,  CardBody,  Image,  } from "@nextui-org/react";
export default function Cardd() {
    return (

 <div className="grid grid-cols-2 gap-1 h-full  py-2">
                <Card className="flex h-full w-full rounded-xl  shadow-lg mb-4">
                    <CardBody className="rounded-xl overflow-hidden ">
                  
        
                    
                  <Image
        				className="h-full px-1 mt-1 hover:scale-105 transition duration-500 ease-in-out rounded-xl  "
                            src="./img (1).jpeg" alt="your image"  />
                       
                    
                </CardBody>
               
                       
                         
                </Card>
 
		<Card className="flex h-full w-full rounded-xl  shadow-lg mb-4">
                <CardBody className=" rounded-lg overflow-hidden" >
                  	
                <Image
                className="h-full px-1 mt-1 hover:scale-105 transition duration-500 ease-in-out rounded-xl "
                src="./img2 (1).jpeg" alt="your image" />
              
            </CardBody>

              </Card>
              
		</div>

    )
}