import { buttonImages } from "@/assets/imageURLs";
import { useState } from "react";
import IMGButtons from "./IMGButtons";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselDots,
  } from "@/components/ui/carousel"
import { scale } from "@cloudinary/url-gen/actions/resize";
  

function CreateSeason(props) {
    const images = [props.img1, props.img2, props.img3, props.img4];
    

    return (
        <div className="flex flex-col m-3">
        <div className="block left-0 pl-0.5 pt-5 pb-3">
            <Link to="/">
                <img src={props.logo} />
            </Link>
        </div>
        <div className="flex flex-col">
            <Carousel
            opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              >
            <CarouselContent>
                <CarouselItem><img src={props.img1} /></CarouselItem>
                <CarouselItem><img src={props.img2} /></CarouselItem>
                <CarouselItem><img src={props.img3} /></CarouselItem>
                <CarouselItem><img src={props.img4} /></CarouselItem>
            </CarouselContent>
            <div className="absolute top-1/2 left-1/5 flex items-center justify-center">
                <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
            </div>
            <div className="absolute top-1/2 right-1/5 flex items-center justify-center">
                <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
            </div>
            <CarouselDots className="p-4"/>
            </Carousel>

        
        </div>
      
        
      
        </div>
       
    );
  }
  
  export default CreateSeason;