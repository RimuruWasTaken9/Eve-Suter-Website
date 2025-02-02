import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselDots,
} from "@/components/ui/carousel";
import { scale } from "@cloudinary/url-gen/actions/resize";


function CreateSeason(props) {
    const images = [props.img1, props.img2, props.img3, props.img4];


    return (
        <div className="flex flex-col m-3">
            <div className="pl-0.5 pt-5 pb-3">
            <Link to="/" className="float-left w-fit inline-block">
                <img src={props.logo} />
            </Link>

            </div>
          
            
                
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        <CarouselItem><img src={props.img1} /></CarouselItem>
                        <CarouselItem><img src={props.img2} /></CarouselItem>
                        <CarouselItem><img src={props.img3} /></CarouselItem>
                        <CarouselItem><img src={props.img4} /></CarouselItem>
                    </CarouselContent>
                   
                    <CarouselDots className="p-4"/>
                </Carousel>
        </div>

    );
}

export default CreateSeason;