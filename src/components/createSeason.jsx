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
            
            <Link to="/" className="pl-0.5 pt-5 pb-3">
                <img src={props.logo} />
            </Link>
            
                
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
                        <CarouselItem><div><img src={props.img1} /></div></CarouselItem>
                        <CarouselItem><img src={props.img2} /></CarouselItem>
                        <CarouselItem><img src={props.img3} /></CarouselItem>
                        <CarouselItem><img src={props.img4} /></CarouselItem>
                    </CarouselContent>
                    <div className="absolute top-1/2 left-1/5 flex items-center justify-center">
                        <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0 hover:scale-125" />
                    </div>
                    <div className="absolute top-1/2 right-1/5 flex items-center justify-center">
                        <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 hover:scale-125" />
                    </div>
                    <CarouselDots className="p-4" />
                </Carousel>





        </div>

    );
}

export default CreateSeason;