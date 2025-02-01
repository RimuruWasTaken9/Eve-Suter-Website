import {  buttonImages } from "../assets/imageURLs.js";
import { Link, useLocation } from "react-router-dom";
import CreateLink from "./createLink.jsx";
/*
if you are reading this future me, I'm sorry. 
Unlike other times I could tell this sucked 
when I was writing it but just wanted a working
part that I knew would probably be scrapped later anyway.
*/

function Navbar() {
    const location = useLocation();
    
    return (
        <div className="flex gap-10 flex-row justify-center">
            
            <CreateLink page="/" content="home" />
            
           
            
            <CreateLink page="/About" content="profile" />
            
            
            <CreateLink page="/Winter" content="winter" />
           
            
            
            <CreateLink page="/Spring" content="spring" />
            
            
            
            <CreateLink page="/Summer" content="summer" />
            
            
            
            <CreateLink page="/Fall" content="fall" />
            
            
           <CreateLink page="/Contact" content="contact" />
           
        </div>
    )
}

export default Navbar;