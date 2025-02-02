import { springImages } from "@/assets/imageURLs";
import CreateSeason from "../components/CreateSeason";
import Navbar  from "../components/Navbar";

function Spring() {
    return (
        <div className="block min-h-[673px] min-w-[830px] shrink">
    <div className="flex flex-col m-3 min-h-screen content-center items-center ">
        <div>
     <CreateSeason 
    logo={springImages.logoWOText}
    img1={springImages.spring1}
    img2={springImages.spring2}
    img3={springImages.spring3}
    img4={springImages.spring4} />
    
    </div>
    <Navbar /> 
    </div>
    </div>
    );
}

export default Spring;