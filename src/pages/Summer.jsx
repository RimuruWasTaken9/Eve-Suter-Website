import { summerImages } from "@/assets/imageURLs";
import CreateSeason from "@/components/createSeason";
import Navbar  from "@/components/Navbar";

function Summer() {
    return (
    <div className="flex flex-col m-3 min-h-screen content-center items-center ">
        <div>
     <CreateSeason 
    logo={summerImages.logoWOText}
    img1={summerImages.summer1}
    img2={summerImages.summer2}
    img3={summerImages.summer3}
    img4={summerImages.summer4} />
    <Navbar />
    </div> 
    </div>
    );
}

export default Summer;