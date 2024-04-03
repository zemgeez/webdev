'use client'


export default function MCover(){


    return(
        <div className=" bg-pink-50 mt-5 ">
            <></>
            <div className=" bg-blue-900  mb-5 mt-10 ml-20 w-fit px-12  "><h1 className=" font-bold text-xl py-3 text-white ">Media Coverage </h1></div>

            <div className="  mx-40  grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-1 bg-orange-100 ">
                <div className="col-span-2  ">
                   <div className="card">
                        <div className="relative group">
                            <img src="./img3Copy.png" alt="" className="bject-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"/>
                            <img src="./ok1.jpg" alt="Second Image" className=" object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0" />
                        </div>
                        {/* <div className="card-body"> */}
                            {/* Content for the card body */}
                            {/* <h2 className="card-title">Card Title</h2>
                            <p className="card-text">Some text goes here...</p>
                        </div> */}
                   </div>

                   
                </div>


                <div className="col-span-2  ">
                    <div className="relative group object-cover">
                        <img src="./ok1.jpg" alt="" className="object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"/>
                        <img src="./swap1.jpg" alt="Second Image" className="  object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0" />
                    </div>
                   
                </div>
                <div className="col-span-1 row-span-2  ">
                    <div className="relative group object-cover">
                        <img src="./img4.png" alt="" className="object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"/>
                        <img src="./swap2.png" alt="Second Image" className="  object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0" />
                    </div>
                   
                </div>

                {/* <div className=" col-span-2 "><img src="./ok1.jpg" alt="" /></div>
                <div className=" col-span-1 row-span-2 "><img src="./img4.png" alt="" /></div> */}
                {/* <div><img src="./nitzs.jpg" alt="" /></div> */}
                <div className=" bg-blue-900 col-span-3 text-white text-5xl font-semibold pb-5 "><h1 className=" mt-6 ml-5 ">Shades Of Campus</h1></div>
                
                <div className="col-span-2 row-span-2   ">
                    <div className="relative group object-cover">
                        <img src="./img112.png" alt="" className="object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"/>
                        <img src="./swap3.png" alt="Second Image" className="  object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0" />
                    </div>
                   
                </div>

                {/* <div className=" col-span-2 row-span-2  "><img src="./img112.png" alt="" /></div> */}
                {/* <div><img src="./nitzs.jpg" alt="" /></div>
                <div><img src="./nitzs.jpg" alt="" /></div> */}
                {/* <div className=" col-span-1 row-span-2  "><img src="./img5.png" alt="" /></div> */}


                <div className="col-span-1 row-span-2  ">
                    <div className="relative group object-cover">
                        <img src="./img5.png" alt="" className="object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"/>
                        <img src="./swap2.png" alt="Second Image" className="  object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0" />
                    </div>
                   
                </div>

                {/* <div><img src="./img2C.png" alt="" /></div> */}


                {/* <div className=" "> */}
                    <div className="relative group object-cover">
                        <img src="./img2C.png" alt="" className="object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"/>
                        <img src="./swap5.jpg" alt="Second Image" className="  object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0" />
                    </div>
                   
                {/* </div> */}



                {/* <div><img src="./nitzs.jpg" alt="" /></div>
                <div><img src="./nitzs.jpg" alt="" /></div> */}
                

            </div>

            <button className=" bg-blue-700 font-semibold text-white  mb-5 w-20 h-10 ml-20 mt-5 ">
                <h1> Next  </h1>
            </button>
	
        </div>
    );
}