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
          {/* <div>
            
              <img src={homeImages.logo} alt="Logo" className="logo" />
            
            <img src={homeImages.sideImage} alt="Side Image" className="sideImage" />
        
          </div> */}
        <div className="home-container">
          <div>
            <div>
              <img src={homeImages.logo} height={95} alt="Logo" className="logo" />
            </div>
            <div className="textButton-container">
              <p>profile</p>  

              <p>winter</p>

              <p>spring</p>  

              <p>summer</p>

              <p>fall</p>  
              <p>contact</p>
            </div>  
          </div>
          <img src={homeImages.sideImage} height={600} alt="Side Image" className="sideImage" />
        </div>
         
         <br />
        
      
      <hr className="break"/>
      <Link to="/About" >About page</Link>
      <br />
      <Link to="/Contact" >Contact page</Link>
      <br />
      <Link to="/Works" >Works page</Link>
      </div>
    );
  }
  
  export default Home;