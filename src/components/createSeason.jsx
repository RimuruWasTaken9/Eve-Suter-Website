import { buttonImages } from "@/assets/imageURLs";
import { useState } from "react";
import IMGButtons from "./IMGButtons";

function CreateSeason(props) {
    const images = [props.img1, props.img2, props.img3, props.img4];

    const [IMG , setIMG] = useState(images[0]);

    function changeIMG(imgID) {
        setIMG(() => {return images[imgID];});
    }

    return (
        <div className="flex flex-col m-3 min-h-screen">
        <div className="block left-0 pl-0.5 pt-5 pb-3">
        <img src={props.logo} />
        </div>
        <div className="block">
        <img src={IMG} />
        </div>
        <div className="block">
        <IMGButtons onChecked={changeIMG} />
        </div>
        </div>
    );
  }

  export default CreateSeason;