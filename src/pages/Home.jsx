import { color } from "@cloudinary/url-gen/qualifiers/background";
import { buttonImages, homeImages } from "../assets/imageURLs.js";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../index.css";


function Home() {


    return (
      // this first div is getting removed once I start updating, for every SINGLE page.
      <div className="block min-h-[673px] min-w-[600px] shrink">

        <div className="flex  flex-col mt-10 min-h-screen content-center items-center ">
  
        <div className="mt-1 grid grid-cols-[5fr_6fr]">
          <div>
            <div>
             
              <img src={homeImages.logo} height={95} alt="Logo" className="pb-10" />
            </div>
            <div className="mt-15 text-gray-600 w-70 ">
             <Link to="/About" className="mt-10 mb-10 block" onMouseOver={e => (e.target.src = buttonImages.profileButtonB)} onMouseOut={e => (e.target.src = buttonImages.profileButtonA)}>
             {<img src={buttonImages.profileButtonA} height={30} alt="Logo" className="logo" /> }
             </Link> 
       
             <Link to="/Winter" className="mt-10 mb-10 block" onMouseOver={e => (e.target.src = buttonImages.winterButtonB)} onMouseOut={e => (e.target.src = buttonImages.winterButtonA)}>
             {<img src={buttonImages.winterButtonA} height={30} alt="Logo" className="logo" /> }
             </Link> 

             <Link to="/Spring" className="mt-10 mb-10 block" onMouseOver={e => (e.target.src = buttonImages.springButtonB)} onMouseOut={e => (e.target.src = buttonImages.springButtonA)}>
             {<img src={buttonImages.springButtonA} height={30} alt="Logo" className="logo" /> }
             </Link> 

             <Link to="/Summer" className="mt-10 mb-10 block" onMouseOver={e => (e.target.src = buttonImages.summerButtonB)} onMouseOut={e => (e.target.src = buttonImages.summerButtonA)}>
             {<img src={buttonImages.summerButtonA} height={30} alt="Logo" className="logo" /> }
             </Link>

             <Link to="/Fall" className="mt-10 mb-10 block" onMouseOver={e => (e.target.src = buttonImages.fallButtonB)} onMouseOut={e => (e.target.src = buttonImages.fallButtonA)}>
             {<img src={buttonImages.fallButtonA} height={30} alt="Logo" className="logo" /> }
             </Link>  

             <Link to="/Contact" className="mt-10 mb-10 block" onMouseOver={e => (e.target.src = buttonImages.contactButtonB)} onMouseOut={e => (e.target.src = buttonImages.contactButtonA)}>
             {<img src={buttonImages.contactButtonA} height={30} alt="Logo" className="logo" /> }
             </Link>
            </div>  
          </div>
          <img src={homeImages.sideImage} height={600} alt="Side Image" className="w-max h-max" />
        </div>
        
      </div>
      </div>
    );
  }
  
  export default Home;