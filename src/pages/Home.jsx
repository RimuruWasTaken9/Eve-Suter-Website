import { color } from "@cloudinary/url-gen/qualifiers/background";
import { buttonImages, homeImages } from "../assets/imageURLs.js";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import CreateLink from "../components/CreateLink.jsx";


function Home() {


    return (
      // this first div is getting removed once I start updating, for every SINGLE page.
      <div className="block min-h-[673px] min-w-[600px] shrink">

        <div className="flex  flex-col mt-10 min-h-screen content-center items-center ">
  
        <div className="mt-1 grid grid-cols-[5fr_6fr]">
          <div className="float-left">
            <div className="block mb-15">
             <Link to="/" className="">
                <img src={homeImages.logo} height={95} alt="Logo" className="pb-10" />
             </Link>
            </div>
            <div className="  text-gray-600 inline">
              
             
              
              <CreateLink page="/About" content="profile"/>

              <CreateLink page="/Winter" content="winter" />

              <CreateLink page="/Spring" content="spring" />

              <CreateLink page="/Summer" content="summer" />

              <CreateLink page="/Fall" content="fall" />

              <CreateLink page="/Contact" content="contact" />
              
            </div>  
          </div>
          <img src={homeImages.sideImage} height={600} alt="Side Image" className="w-max h-max" />
        </div>
        
      </div>
      </div>
    );
  }
  
  export default Home;