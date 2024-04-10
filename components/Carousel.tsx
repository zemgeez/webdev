
import { Carousel } from 'react-responsive-carousel';




export default function Carousel1() {
    return (
        <Carousel
            autoPlay
            showThumbs={false}
            interval={3000}
            infiniteLoop
            className="bg-cover">
           
                <img src="./ft1.jpeg" alt="image1" />
          
           
                <img src="./gb1.jpeg" alt="image2" />
        
                <img src="./lb1.jpeg" alt="image3" />
         
           
                <img src="./sk1.jpg" alt="image4" />
         
       
                <img src="./ad1.jpeg" alt="image5" />
      
        </Carousel>
    )
}