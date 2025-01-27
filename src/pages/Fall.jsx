import { fallImages } from "@/assets/imageURLs";
import CreateSeason from "@/components/createSeason";
import Navbar  from "@/components/Navbar";

function Fall() {
    return (
    <div className="flex flex-col mt-7 min-h-screen content-center items-center max-w-375"> 
     <CreateSeason 
    logo={fallImages.logoWOText}
    img1={fallImages.fall1}
    img2={fallImages.fall2}
    img3={fallImages.fall3}
    img4={fallImages.fall4} />
    <Navbar/>
    </div>
    );
}

export default Fall;