
// import { Carousel } from "@material-tailwind/react";

 
// export default function CarouselTransition() {
//   return (
//     <Carousel transition={{ duration: 2 }} className="rounded-xl">
//       <img src="./img3Copy.png" alt="image 1" className="h-full w-full object-cover"/>
      
//       <img src="./ok1.jpg" alt="image 2" className="h-full w-full object-cover"/>
      
//       <img src="./img3Copy.png" alt="image 3" className="h-full w-full object-cover"/>
      
//     </Carousel>
//   );
// }


'user client'
import { Carousel } from "react-responsive-carousel";

export default function BestSlider (){
    return(
        
        <Carousel showThumbs={false}   interval={3000} axis="horizontal"  className=" mt-1 w-full py-1 px-1 rounded-3xl  ">
            <div className="rounded-xl">
              <img src="./slide2.jpeg"  className ="aspect-video" alt="image1" />
            </div>
           <div className="rounded-xl">
              <img src="./slide22.jpeg"  className ="aspect-video"alt="image2" />
            </div>
           <div className="rounded-xl">
              <img src="./dep1.jpeg"  className ="aspect-video" alt="image3" />
            </div>

        </Carousel>
        
    );
}