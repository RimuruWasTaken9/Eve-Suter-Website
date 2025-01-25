import { springImages } from "@/assets/imageURLs";
import Navbar  from "@/components/Navbar";

function Spring() {
    return (
        <div className="flex flex-col mt-7 min-h-screen content-center items-center max-w-375"> 
        <img src={springImages.spring1}  alt="Logo" className="w-max h-max" />
        <Navbar/>
        </div>
    );
};

export default Spring;