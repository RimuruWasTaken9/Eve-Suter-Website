import { color } from "@cloudinary/url-gen/qualifiers/background";
import { seasonalImages, homeImages } from "../assets/imageURLs.js";
import { Link, NavLink } from "react-router-dom";
import "../index.css";


function Home() {

    const logoIMG = "https://res.cloudinary.com/dpbsgzrho/image/upload/v1737241786/top_logo_w1gh4k.jpg";
    const logoWOTextIMG = "https://res.cloudinary.com/dpbsgzrho/image/upload/v1737241785/logo_jx2asg.jpg";
    const sideIMG = "https://res.cloudinary.com/dpbsgzrho/image/upload/v1737241786/top_drln6x.jpg";
    return (
        <div>
      <div className="gallery-container">
        <h3 className="main-title" id="title1" >Eve Suter's Portfolio</h3>
        <h4 className="main-title" id="title2">Eve Suter's Portfolio</h4>
        <h4 className="main-title" id="title3">Eve Suter's Portfolio</h4>
        <h4 className="main-title" id="title4">Eve Suter's Portfolio</h4>
        <h4 className="main-title" id="title5">Eve Suter's Portfolio</h4>
        <img src={homeImages.logo} alt="Logo" className="logo" />
        <img src={homeImages.logoWOText} alt="Logo" className="logoWOText" />
        <br />
        <img src={homeImages.sideImage} alt="Side Image" className="sideImage" />
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
      <hr className="break"/>
      <Link to="/About" >About page</Link>
      <br />
      <Link to="/Contact" >Contact page</Link>
      </div>
    );
  }
  
  export default Home;