import { color } from "@cloudinary/url-gen/qualifiers/background";
import { seasonalImages, homeImages } from "../assets/imageURLs.js";
import { Link, NavLink } from "react-router-dom";
import "../index.css";


function Home() {

    const logoIMG = "https://res.cloudinary.com/dpbsgzrho/image/upload/v1737241786/top_logo_w1gh4k.jpg";
    const logoWOTextIMG = "https://res.cloudinary.com/dpbsgzrho/image/upload/v1737241785/logo_jx2asg.jpg";
    const sideIMG = "https://res.cloudinary.com/dpbsgzrho/image/upload/v1737241786/top_drln6x.jpg";
    return (
        <div className="App">
  
        <div className="home-container">
          <div>
            <div>
              <img src={homeImages.logo} height={95} alt="Logo" className="logo" />
            </div>
            <div className="textButton-container">
             <Link to="/About" className="pageLink" ><p>profile</p></Link> 
       

              <Link to="/Works" className="pageLink" ><p>winter</p></Link> 

              <Link to="/Works" className="pageLink" ><p>spring</p></Link> 

              <Link to="/Works" className="pageLink" ><p>summer</p></Link> 

              <Link to="/Works" className="pageLink" ><p>fall</p></Link> 

              <Link to="/Contact" className="pageLink" ><p>contact</p></Link> 
              
            </div>  
          </div>
          <img src={homeImages.sideImage} height={600} alt="Side Image" className="sideImage" />
        </div>
      </div>
    );
  }
  
  export default Home;