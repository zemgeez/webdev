import React from 'react';
import { Button } from "./ui/button";

class MCover extends React.Component {
    render() {
        return (
              <div className=" container bg-transparent mt-5  font-light ">
           
            <div className=" bg-blue-900  mb-5 mt-10 ml-20 w-fit px-12  "><h1 className=" font-light text-xl py-3 text-white ">Media Coverage </h1></div>

            <div className="  mx-20  grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-1 bg-transparent  hover:shadow-lg  ">
                <div className="col-span-2  "><img src="./img3Copy.png" alt="" /></div>
                <div className=" col-span-2 "><img src="./ok1.jpg" alt="" /></div>
                <div className=" col-span-1 row-span-2 "><img src="./img4.png" alt="" /></div>
                {/* <div><img src="./nitzs.jpg" alt="" /></div> */}
                <div className=" bg-blue-900 col-span-3 text-white text-5xl font-semibold pb-5 "><h1 className=" mt-6 ml-5 ">Shades Of Campus</h1></div>
                <div className=" col-span-2 row-span-2  "><img src="./img112.png" alt="" /></div>
                {/* <div><img src="./nitzs.jpg" alt="" /></div>
                <div><img src="./nitzs.jpg" alt="" /></div> */}
                <div className=" col-span-1 row-span-2  "><img src="./img5.png" alt="" /></div>
                <div><img src="./img2C.png" alt="" /></div>
                {/* <div><img src="./nitzs.jpg" alt="" /></div>
                <div><img src="./nitzs.jpg" alt="" /></div> */}
                

            </div>

            <Button variant='secondary'>
                Next 
        </Button>
	
        </div>
        );
    }
}

export default MCover;