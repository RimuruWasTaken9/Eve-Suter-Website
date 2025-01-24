import { seasonalImages, homeImages } from "../assets/imageURLs.js";


function Works() {

     return (
        <div  className="flex flex-col mt-7 min-h-screen content-center items-center max-w-375">
            {seasonalImages.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-10">
            <h4 className=" pt-5 pb-5 text-gray-600 text-center">{group.title}</h4>
            <div className="flex flex-wrap justify-center gap-5">
            {group.images.map((url, index) => (
            <img
            key={index}
            src={url}
            alt={`Artwork ${groupIndex + 1}-${index + 1}`}
            className="w-48 h-auto rounded-lg shadow-lg"
            />
            ))}
            </div>
     </div>
            ))}
</div>
 
);
}

export default Works;