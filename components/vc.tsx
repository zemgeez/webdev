'use client'
import ReactPlayer from "react-player";
export default function vc (){


  return (
    <div className="bg-white w-full max-w-screen-lg mx-auto">
      <div className="px-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 bg-orange-100">
        <div className="bg-blue-900 mt-16 py-4">
          <h1 className="font-bold text-xl ml-28 text-white">Campus Tour</h1>
        </div>
        <div className="bg-blue-900 mt-16 py-4">
          <h1 className="font-bold text-xl ml-14 text-white">Message From Director's </h1>
        </div>
      </div>
      <div className="px-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 bg-orange-100">
        <div className="bg-blue-900 mt-10 h-fit">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=n9EN69iWps4&ab_channel=DRONEPHOTOGRAPHY%2CSILCHAR"
            controls={true}
            playing={true}
            width="100%"
          />
        </div>
        <div className="bg-white mt-10 h-fit">
          <img className="h-full mb-20 hover: shadow-lg" src="./dr1.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}  