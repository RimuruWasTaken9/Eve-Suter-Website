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
            }}
            directionid={props.directionid}
        >
            <CarouselContent>
                {props.photos.map((item, index) => (
                    <CarouselItem key={index} className=" ">
                        <img src={item} className="w-70 h-auto rounded-lg shadow-lg" alt={`carousel item ${index + 1}`} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            
        </Carousel>
                
    </div>
    )
}
export default NewCarousel;