import { seasonalImages, homeImages } from "../assets/imageURLs.js";


function Works() {

     return (
        <div>
            {seasonalImages.map((group, groupIndex) => (
            <div key={groupIndex} className="group-container">
            <h4 className="group-title">{group.title}</h4>
            <div className="image-row">
            {group.images.map((url, index) => (
            <img
            key={index}
            src={url}
            alt={`Artwork ${groupIndex + 1}-${index + 1}`}
            className="image"
            />
            ))}
            </div>
     </div>
            ))}
</div>
 
);
}

export default Works;