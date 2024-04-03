'use client'

import { Card,CardBody } from "@nextui-org/react";

export default function CardTop(){
    return(<>

        
        <Card className="flex flex-col   text-white mx-6 ">
            <CardBody className="  " >
            <div className=" flex flex-col h-1/1 w-full bg-white md:gap-4  bg-cover bg-center ">

                
            
                <img 
                className="flex h-3/5 w-1/1  "
                src="./to1.jpg" alt="" 
                
                />  
        {/*        <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Event is live</h1>
        <h2 className="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">Bottom Center</h2>

               

    */}         


   {/*         <div  className="w-full h-screen  bg-[url('https://www.slingacademy.com/wp-content/uploads/2022/10/night-sky.webp')] bg-cover bg-center"> 
            
            <div className="w-full h-full flex flex-col justify-center items-center backdrop-blur-lg">
            <h3 className="text-2xl text-orange-400">HI THERE</h3>
            <h1 className="mt-5 text-center text-4xl text-white font-semibold drop-shadow-lg">WELCOME TO
                <span className="text-yellow-300">Page is live</span>
            </h1>
        </div>

            </div>

    







                <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Sling Academy</h1>

        */}

            <div className="absolute bottom-0 left-0 right-0 top-0 px-4 py-40 bg-gray-800 opacity-80 text-center">
            <div className="w-full h-full flex flex-col justify-center items-center backdrop-blur-lg">
    <h3 className="text-5xl justify-center text-white font-bold">
        Where Dreams Become Reality !
    </h3>
    <p className="mt-2 text-lg text-gray-300">
             For you we brings the most thrilling and exciting events at NIT SILCHAR.
    </p>
</div>

              

            
            </div>

            <section className="w-full h-full bg-gray-500">
               

</section>
            </div>

            </CardBody>

            

        </Card>

        


      












  {/*     <div className="flex h-13 w-screen " >
            <img  src="./to.jpg"  className="h-25  w-screen shadow-inner "alt=""  />
            
            <div className="flex h-1 w-20 bg-white "></div>
            <p></p>

        </div>
    */}

{/*<div className="flex h-10 w-20 bg-white "></div> */}





            

        </>





    );
}

