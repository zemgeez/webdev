'use client'


export default function CardHover(){
    return(
        <div className="w-72 h-fit group ml-0">
           <div className="relative overflow-hidden mt-50 ">
            <img src="./eve2.png" alt=""/>
            <div className="absolute h-full w-full bg-black/80  -bottom-30 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h1 className=" text-xl font-bold py-9">Event 1</h1>
                <p className="py-15 text-justify ml-4 mr-4">The event is all about the photography.All the artist have thier own art form woth unique style.</p>
            </div>

           </div>

        </div>
        
    );
}

/*<img  src="./eve9.png"  className="h-25  w-screen shadow-inner "alt=""  />
            
<p></p>

*/