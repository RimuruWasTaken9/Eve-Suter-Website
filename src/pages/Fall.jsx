import { fallImages } from "@/assets/imageURLs";
import Navbar  from "@/components/Navbar";

function Fall() {
    return (
    <div className="flex flex-col mt-7 min-h-screen content-center items-center max-w-375"> 
    <img src={fallImages.fall1}  alt="Logo" className="w-max h-max" />
    <Navbar/>
    </div>
    );
}

export default Fall;