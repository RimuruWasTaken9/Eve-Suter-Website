import { summerImages } from "@/assets/imageURLs";
import Navbar  from "@/components/Navbar";

function Summer() {
    return (
        <div className="flex flex-col mt-7 min-h-screen content-center items-center max-w-375"> 
        <img src={summerImages.summer1}  alt="Logo" className="w-max h-max" />
        <Navbar/>
        </div>
    );
};

export default Summer;