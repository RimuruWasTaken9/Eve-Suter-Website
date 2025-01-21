import { color } from "@cloudinary/url-gen/qualifiers/background";
import { seasonalImages } from "../assets/imageURLs.js";
import { Link, NavLink } from "react-router-dom";
import "../index.css";

function Home() {
    return (
        <div>
      <div className="gallery-container">
        <h1 className="main-title" >Eve Suter's Portfolio</h1>
        {seasonalImages.map((group, groupIndex) => (
          <div key={groupIndex} className="group-container">
            <h2 className="group-title">{group.title}</h2>
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
      <hr />
      <Link to="/About" >About page</Link>
      <br />
      <Link to="/Contact" >Contact page</Link>
      </div>
    );
  }
  
  export default Home;