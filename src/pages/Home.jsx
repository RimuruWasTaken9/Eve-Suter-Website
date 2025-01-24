import { color } from "@cloudinary/url-gen/qualifiers/background";
import { buttonImages, homeImages } from "../assets/imageURLs.js";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../index.css";


function Home() {


    return (
        <div className="App flex flex-col">
  
        <div className="home-container">
          <div>
            <div>
              <p className="text-green-600">test</p>
              <img src={homeImages.logo} height={95} alt="Logo" className="logo" />
            </div>
            <div className="textButton-container">
             <Link to="/About" className="pageLink" onMouseOver={e => (e.target.src = buttonImages.profileButtonB)} onMouseOut={e => (e.target.src = buttonImages.profileButtonA)}>
             {<img src={buttonImages.profileButtonA} height={30} alt="Logo" className="logo" /> }
             </Link> 
       
             <Link to="/Works" className="pageLink" onMouseOver={e => (e.target.src = buttonImages.winterButtonB)} onMouseOut={e => (e.target.src = buttonImages.winterButtonA)}>
             {<img src={buttonImages.winterButtonA} height={30} alt="Logo" className="logo" /> }
             </Link> 

             <Link to="/Works" className="pageLink" onMouseOver={e => (e.target.src = buttonImages.springButtonB)} onMouseOut={e => (e.target.src = buttonImages.springButtonA)}>
             {<img src={buttonImages.springButtonA} height={30} alt="Logo" className="logo" /> }
             </Link> 

             <Link to="/Works" className="pageLink" onMouseOver={e => (e.target.src = buttonImages.fallButtonB)} onMouseOut={e => (e.target.src = buttonImages.fallButtonA)}>
             {<img src={buttonImages.fallButtonA} height={30} alt="Logo" className="logo" /> }
             </Link>

             <Link to="/Works" className="pageLink" onMouseOver={e => (e.target.src = buttonImages.summerButtonB)} onMouseOut={e => (e.target.src = buttonImages.summerButtonA)}>
             {<img src={buttonImages.summerButtonA} height={30} alt="Logo" className="logo" /> }
             </Link>  

             <Link to="/Contact" className="pageLink" onMouseOver={e => (e.target.src = buttonImages.contactButtonB)} onMouseOut={e => (e.target.src = buttonImages.contactButtonA)}>
             {<img src={buttonImages.contactButtonA} height={30} alt="Logo" className="logo" /> }
             </Link>
            </div>  
          </div>
          <img src={homeImages.sideImage} height={600} alt="Side Image" className="sideImage" />
        </div>
      </div>
    );
  }
  
  export default Home;