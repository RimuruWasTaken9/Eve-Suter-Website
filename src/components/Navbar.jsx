import {  buttonImages } from "../assets/imageURLs.js";
import { Link, useLocation } from "react-router-dom";

/*
if you are reading this future me, I'm sorry. 
Unlike other times I could tell this sucked 
when I was writing it but just wanted a working
part that I knew would probably be scrapped later anyway.
*/

function Navbar() {
    const location = useLocation();
    
    return (
        <div className="pt-5 pl-3 grid grid-cols-7 min-w-[525px]">
            
             <Link to="/" className="mt-7 mb-7 " onMouseOver={e => (e.target.src = buttonImages.homeButtonB)} onMouseOut={e => (e.target.src = buttonImages.homeButtonA)}>
             {<img src={buttonImages.homeButtonA}  alt="Logo" className="h-[20px] w-[70px]"/> }
             </Link> 
             
             {location.pathname === "/About" ? <img src={buttonImages.profileButtonB}  alt="Logo" className="mt-7 mb-7 h-[20px] w-[70px]" /> :
             <Link to="/About" className="mt-7 mb-7 ">
             {<img src={buttonImages.profileButtonA}  alt="Logo" className="h-[20px] w-[70px] " /> }
             </Link> }
             
             {location.pathname === "/Winter" ? <img src={buttonImages.winterButtonB}  alt="Logo" className="mt-7 mb-7 h-[20px] w-[70px]" /> :
             <Link to="/Works" className="mt-7 mb-7" onMouseOver={e => (e.target.src = buttonImages.winterButtonB)} onMouseOut={e => (e.target.src = buttonImages.winterButtonA)}>
             {<img src={buttonImages.winterButtonA}  alt="Logo" className="h-[20px] w-[70px] " /> }
             </Link> }

             {location.pathname === "/Spring" ? <img src={buttonImages.springButtonB}  alt="Logo" className="mt-7 mb-7 h-[20px] w-[70px]" /> :
             <Link to="/Works" className="mt-7 mb-7" onMouseOver={e => (e.target.src = buttonImages.springButtonB)} onMouseOut={e => (e.target.src = buttonImages.springButtonA)}>
             {<img src={buttonImages.springButtonA}  alt="Logo" className="h-[20px] w-[70px] " /> }
             </Link> }

             {location.pathname === "/Summer" ? <img src={buttonImages.summerButtonB}  alt="Logo" className="mt-7 mb-7 h-[20px] w-[70px]" /> :
             <Link to="/Home2" className="mt-7 mb-7" onMouseOver={e => (e.target.src = buttonImages.summerButtonB)} onMouseOut={e => (e.target.src = buttonImages.summerButtonA)}>
             {<img src={buttonImages.summerButtonA}  alt="Logo" className="h-[20px] w-[70px] " /> }
             </Link>  }

             {location.pathname === "/Fall" ? <img src={buttonImages.fallButtonB}  alt="Logo" className="mt-7 mb-7 h-[20px] w-[70px]" /> :
             <Link to="/Works" className="mt-7 mb-7" onMouseOver={e => (e.target.src = buttonImages.fallButtonB)} onMouseOut={e => (e.target.src = buttonImages.fallButtonA)}>
             {<img src={buttonImages.fallButtonA}  alt="Logo" className=" h-[20px]" /> }
             </Link> }

             {location.pathname === "/Contact" ? <img src={buttonImages.contactButtonB}  alt="Logo" className="mt-7 mb-7 h-[20px] w-[70px]" /> :
             <Link to="/Contact" className="mt-7 mb-7" onMouseOver={e => (e.target.src = buttonImages.contactButtonB)} onMouseOut={e => (e.target.src = buttonImages.contactButtonA)}>
             {<img src={buttonImages.contactButtonA} alt="Logo" className="h-[20px] w-[70px] " /> }
             </Link> }
        </div>
    )
}

export default Navbar;