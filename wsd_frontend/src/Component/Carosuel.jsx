
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function DemoCarousel(){

    return (
        <>
       
        <Carousel>
            
            <div>
                <img src="img1.jpg"  alt="hotel1"/>
            </div>
            <div>
                <img src="img2.jpg" alt="hotel2"/>
            </div>
            <div>
                <img src="img3.jpg" alt="hotel3"/>
                
            </div>
        </Carousel>

       
        </>
    );
    
}


export default DemoCarousel;