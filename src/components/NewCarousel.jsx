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
 
    return (
    <div className="">
        <Carousel
            opts={{
                align: "start",
                loop: true,
                dragFree: true,
            }}
            directionid={props.directionid}
        >
           
            <CarouselContent>
                {props.photos.map((item, index) => (
                    <CarouselItem key={index} className="p-3">
                        <img src={item} className="m-3 w-70 h-auto rounded-lg shadow-lg" alt={`carousel item ${index + 1}`} />
                    </CarouselItem>
                    
                ))}
            </CarouselContent>
            
        </Carousel>
                
    </div>
    )
}
export default NewCarousel;