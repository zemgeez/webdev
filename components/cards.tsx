
import { Card,  CardBody,  Image,  } from "@nextui-org/react";
export default function Cardd() {
    return (

 <div className="grid grid-cols-2 gap-0 max-h-96  w-full py-2">
                <Card className="flex  w-fit rounded-xl  shadow-lg mb-1">
                    <CardBody className="rounded-xl overflow-hidden h-fit">
                  
        
                    
                  <Image
        				className="max-h-80 px-1 mt-1 hover:scale-105 transition duration-500 ease-in-out rounded-xl  "
                            src="./img (1).jpeg" alt="your image"  />
                       
                    
                </CardBody>
               
                       
                         
                </Card>
 
    <Card className="flex  w-fit rounded-xl  shadow-lg mb-1">
                    <CardBody className="rounded-xl overflow-hidden h-fit">
                  
        
                    
                  <Image
        				className="max-h-80 px-1 mt-1 hover:scale-105 transition duration-500 ease-in-out rounded-xl  "
                            src="./img2 (1).jpeg" alt="your image"  />
                       
                    
                </CardBody>
               
                       
                         
                </Card>
              
		</div>

    )
}