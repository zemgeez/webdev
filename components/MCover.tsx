'use client'


export default function MCover(){


    return(
        <div className=" bg-pink-50 mt-5 ">
            <></>
            <div className=" bg-blue-900  mb-5 mt-10 ml-20 w-fit px-12  "><h1 className=" font-bold text-xl py-3 text-white ">Media Coverage </h1></div>

            <div className="  mx-20  grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-1 bg-orange-100 ">
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

            <button className=" bg-blue-700 font-semibold text-white  mb-5 w-20 h-10 ml-20 mt-5 ">
                <h1> Next  </h1>
            </button>
	
        </div>
    );
}