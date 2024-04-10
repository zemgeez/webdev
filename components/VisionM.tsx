'use client'


export default function ViMi(){
    
    
         return(

            <>
               <section className="bg-blue-200">
               <div className="flex flex-col items-center justify-center bg-black px-8 mt-5 py-16 sm:py-8 sm:w-full text-center  text-white">
                    <h2 className="text-white mb-4">About Institute </h2>
                    <p className="text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptas facere provident velit reiciendis exercitationem at rerum ducimus quia illum modi libero totam sapiente dicta, quisquam quae maxime sit aut! reiciendis exercitationem at rerum ducimus quia illum modi libero totam sapiente dicta, quisquam quae maxime sit aut!</p>
                 {/* <div className=" text-white "> About Institute  </div> */}
                 </div>

                <div className="container mt-5  grid grid-cols-1 md:grid-cols-2 gap-4 m:py-8 sm:w-full ">
                    {/* <div className="bg-gray-700 text-center font-semibold text-white row-span-3 col-span-2  ">hi there</div> */}
                    <div className="bg-gray-700 py-2 px-6  text-top flex items-center text-white">
                        <div> 
                            
                            <img className="h-32 ml-6 mr-16" src="./vision.jpg" alt="" />
                                
                        </div>

                        <div className="text-left max-w-xs">
                            <h2 className="ml-16 font-medium text-2xl "> Vision</h2>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolore asperiores dignissimos optio quos perferendis nulla totam fuga nam autem. Voluptatum accusantium ex dolorem eveniet, nulla dicta fugit vitae ad.</p>
                        </div>
                    </div>

                    <div className="bg-gray-700 py-2  text-top flex items-center text-white">
                        <div> 
                            
                            <img className="h-32 ml-6 mr-12" src="./mission.jpg" alt="" />
                                
                        </div>

                        <div className="text-left max-w-xs">
                            <h2 className="ml-16 font-medium text-2xl "> Misssion</h2>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolore asperiores dignissimos optio quos perferendis nulla totam fuga nam autem. Voluptatum accusantium ex dolorem eveniet, nulla dicta fugit vitae ad.</p>
                        </div>
                    </div>



                    {/* <div className="bg-gray-700 py-20 text-center text-white ">2 hi there</div> */}
                
                </div>
               </section> 
                 
        </>
    );
    
   
}