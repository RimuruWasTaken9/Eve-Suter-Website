import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselDots,
} from "@/components/ui/carousel";
import React from 'react';

function NewCarousel(props) {
   
      const carouselItems = props.photos.map((item, index) => (
        <img src={item} className="w-48 h-auto rounded-lg shadow-lg" alt={`carousel item ${index + 1}`} />
      ));
      
      
       


      return (
        <div className="">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    directionid={props.directionid}
                >
                    <CarouselContent>
                        {props.photos.map((item, index) => (
        <CarouselItem key={index}>
            <img src={item} className="w-48 h-auto rounded-lg shadow-lg" alt={`carousel item ${index + 1}`} />
        </CarouselItem>
      ))}
                        </CarouselContent>
                   
                </Carousel>
                    
            </div>
      )
}
export default NewCarousel;