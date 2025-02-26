import { color } from "@cloudinary/url-gen/qualifiers/background";
import { seasonalImages, homeImages } from "../assets/imageURLs.js";
import { Link, NavLink } from "react-router-dom";
import NewCarousel from "@/components/NewCarousel.jsx";
import "../index.css";

/*
New home page layout idea:
All of the seasonal images are now on the same slide
dividing into 4 different sections as carousels automatically scrolling left
if the user hovers over a carousel, it stops.
if the user hovers over an image in the carousel, it slightly enlarges the image
if the user then clicks on that image, it enlarges even more and covers most of the screen

ESTIMATED TIME: 2-3 hours total
*/

function Home2() {

    const logoIMG = "https://res.cloudinary.com/dpbsgzrho/image/upload/v1737241786/top_logo_w1gh4k.jpg";
    const logoWOTextIMG = "https://res.cloudinary.com/dpbsgzrho/image/upload/v1737241785/logo_jx2asg.jpg";
    const sideIMG = "https://res.cloudinary.com/dpbsgzrho/image/upload/v1737241786/top_drln6x.jpg";
    return (
      <div  className="flex flex-col mt-7">
            <Link to="/" className="float-left w-fit inline-block">
                <img src={homeImages.logoWOText} />
            </Link>
            
            {seasonalImages.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-10">
            <h4 className=" pt-5 pb-5 text-gray-600 text-left pl-6">{group.title}</h4>
            <div className="">
            <NewCarousel 
            key={groupIndex}
            photos={seasonalImages[groupIndex].images} 
            directionid={groupIndex}/>
            {/* {group.images.map((url, index) => (
            <img
            key={index}
            src={url}
            alt={`Artwork ${groupIndex + 1}-${index + 1}`}
            className="w-48 h-auto rounded-lg shadow-lg"
            />
            ))} */}
            </div>
     </div>
            ))}
</div>
      
       
    );
  }
  
  export default Home2;