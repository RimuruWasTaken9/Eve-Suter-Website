import { fallImages } from "@/assets/imageURLs";
import CreateSeason from "@/components/createSeason";
import Navbar  from "@/components/Navbar";

function Fall() {
    return (
        
    <div className="block min-h-[673px] min-w-[830px] shrink">
    <div className="flex flex-col m-3 min-h-screen content-center items-center ">
        <div>
     <CreateSeason 
    logo={fallImages.logoWOText}
    img1={fallImages.fall1}
    img2={fallImages.fall2}
    img3={fallImages.fall3}
    img4={fallImages.fall4} />
    </div> 
   

    <Navbar className=""/>
    
    </div>
    </div>
    );
}

export default Fall;