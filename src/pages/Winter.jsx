import { winterImages } from "@/assets/imageURLs";
import CreateSeason from "@/components/createSeason";
import Navbar from "@/components/Navbar";


function Winter() {
    return (

        <div className="block min-h-[673px] min-w-[830px] shrink">
            <div className="flex flex-col m-3 min-h-screen content-center  items-center ">
                <div>
                    <CreateSeason
                        logo={winterImages.logoWOText}
                        img1={winterImages.winter1}
                        img2={winterImages.winter2}
                        img3={winterImages.winter3}
                        img4={winterImages.winter4} />

                </div>
                
            <Navbar />
            </div>
        </div>
    );
}

export default Winter;