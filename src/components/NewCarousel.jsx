import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselDots,
} from "@/components/ui/carousel";
import React, {useState} from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"

function NewCarousel(props) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
 
    const updateIndex = (index) => setIndex(index);
    
    const handleMouseOver = (e) => {
        // e.target.style.transition = "transform 0.15s ease-in, box-shadow 0.15s ease-in";
        e.target.style.transform = "scale(1.25)";
        // e.target.classList.remove("shadow-lg");
    };
    const handleMouseOut = (e) => {
        e.target.style.transform = "scale(1)";
        // e.target.classList.add("shadow-lg");
        
    };
 
    const photos = props.photos.map((item) => ({src: item}))

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
                            <img
                                src={item}
                                className="m-3 w-70 h-auto rounded-lg transition-transform duration-150"
                                alt={`carousel item ${index + 1}`}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                                onClick={() => {setOpen(true); setIndex(index);}}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <Lightbox
        index={index} //[{src: props.photos[0]}]
        slides={photos}
        open={open}
        close={() => setOpen(false)}
        
      />
        </div>
    );
}
export default NewCarousel;