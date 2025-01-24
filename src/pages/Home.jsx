import { color } from "@cloudinary/url-gen/qualifiers/background";
import { buttonImages, homeImages } from "../assets/imageURLs.js";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../index.css";


function Home() {


    return (
        <div className="flex  flex-col mt-7 min-h-screen content-center items-center max-w-375">
  
        <div className="mt-1 grid grid-cols-[5fr_6fr]">
          <div>
            <div>
             
              <img src={homeImages.logo} height={95} alt="Logo" className="logo" />
            </div>
            <div className="mt-15 text-gray-600">
             <Link to="/About" className="mt-7 mb-7 block" onMouseOver={e => (e.target.src = buttonImages.profileButtonB)} onMouseOut={e => (e.target.src = buttonImages.profileButtonA)}>
             {<img src={buttonImages.profileButtonA} height={30} alt="Logo" className="logo" /> }
             </Link> 
       
             <Link to="/Works" className="mt-7 mb-7 block" onMouseOver={e => (e.target.src = buttonImages.winterButtonB)} onMouseOut={e => (e.target.src = buttonImages.winterButtonA)}>
             {<img src={buttonImages.winterButtonA} height={30} alt="Logo" className="logo" /> }
             </Link> 

             <Link to="/Works" className="mt-7 mb-7 block" onMouseOver={e => (e.target.src = buttonImages.springButtonB)} onMouseOut={e => (e.target.src = buttonImages.springButtonA)}>
             {<img src={buttonImages.springButtonA} height={30} alt="Logo" className="logo" /> }
             </Link> 

             <Link to="/Works" className="mt-7 mb-7 block" onMouseOver={e => (e.target.src = buttonImages.summerButtonB)} onMouseOut={e => (e.target.src = buttonImages.summerButtonA)}>
             {<img src={buttonImages.summerButtonA} height={30} alt="Logo" className="logo" /> }
             </Link>

             <Link to="/Home2" className="mt-7 mb-7 block" onMouseOver={e => (e.target.src = buttonImages.fallButtonB)} onMouseOut={e => (e.target.src = buttonImages.fallButtonA)}>
             {<img src={buttonImages.fallButtonA} height={30} alt="Logo" className="logo" /> }
             </Link>  

             <Link to="/Contact" className="mt-7 mb-7 block" onMouseOver={e => (e.target.src = buttonImages.contactButtonB)} onMouseOut={e => (e.target.src = buttonImages.contactButtonA)}>
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