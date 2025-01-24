import {  buttonImages, profileImages } from "../assets/imageURLs.js";
import { Link, NavLink } from "react-router-dom";

function About() {
    return (
      <div className="flex flex-col m-3 min-h-screen content-center items-center">
        <div >
          <img src={profileImages.nameImage}  alt="Logo" className="w-max h-max pt-6 pb-5 self-start" />
        
        <div className="mt-1 grid grid-cols-[350px_1fr] gap-25">
          <div className="">
            <p className="text-yellow-700">About Eve:</p>
            
            <p className="text-zinc-500">Swiss-born Eve Suter graduated with honors from the <br /> Lullier Horticulture School in
              <span className="text-yellow-700"> Geneva</span>. She followed the <br />
               three-year program with a two-year Swiss apprenticeship <br /> as a flower design.
              </p>

            <p className="text-zinc-500">In 1991, Eve traveled to Japan where she met Mami Kawasaki,<br />
              the founder of the Mami Flower Design School in <span className="text-yellow-700"> Tokyo</span>.<br />
              She became an instructor at the school and lived in Japan for<br /> 
              seven years. During her stay, Eve participated in floral <br />
              exhibiitions in Japan as well as in Korea and Taiwan, and <br />
              was published in a variety of books and magazines.
              </p>

            <p className="text-zinc-500">Eve has had solo exhibitions of her work in Japan, Switzerland,<br />
             and the United States.</p>

            <p className="text-zinc-500">She currently lives in <span className="text-yellow-700"> New York </span>City.<br />
             She works with corporate and private clients,<br />
            does event and sculptural design, and teaches.
               </p>
          </div>
        <img src={profileImages.profileImage}  alt="Logo" className="w-max h-max" />
        </div>
        <div className="pt-5 pl-3 grid grid-cols-7 min-w-[525px]">
             <Link to="/Home" className="mt-7 mb-7 " onMouseOver={e => (e.target.src = buttonImages.homeButtonB)} onMouseOut={e => (e.target.src = buttonImages.homeButtonA)}>
             {<img src={buttonImages.homeButtonA}  alt="Logo" className="h-[20px] w-[70px] m-2"/> }
             </Link> 

             <Link to="/About" className="mt-7 mb-7 " onMouseOver={e => (e.target.src = buttonImages.profileButtonB)} onMouseOut={e => (e.target.src = buttonImages.profileButtonA)}>
             {<img src={buttonImages.profileButtonA}  alt="Logo" className="h-[20px] w-[70px] m-2" /> }
             </Link> 
       
             <Link to="/Works" className="mt-7 mb-7" onMouseOver={e => (e.target.src = buttonImages.winterButtonB)} onMouseOut={e => (e.target.src = buttonImages.winterButtonA)}>
             {<img src={buttonImages.winterButtonA}  alt="Logo" className="h-[20px] w-[70px] m-2" /> }
             </Link> 

             <Link to="/Works" className="mt-7 mb-7" onMouseOver={e => (e.target.src = buttonImages.springButtonB)} onMouseOut={e => (e.target.src = buttonImages.springButtonA)}>
             {<img src={buttonImages.springButtonA}  alt="Logo" className="h-[20px] w-[70px] m-2" /> }
             </Link> 

             <Link to="/Home2" className="mt-7 mb-7" onMouseOver={e => (e.target.src = buttonImages.summerButtonB)} onMouseOut={e => (e.target.src = buttonImages.summerButtonA)}>
             {<img src={buttonImages.summerButtonA}  alt="Logo" className="h-[20px] w-[70px] m-2" /> }
             </Link>  

             <Link to="/Works" className="mt-7 mb-7" onMouseOver={e => (e.target.src = buttonImages.fallButtonB)} onMouseOut={e => (e.target.src = buttonImages.fallButtonA)}>
             {<img src={buttonImages.fallButtonA}  alt="Logo" className="m-2 h-[20px]" /> }
             </Link>

             <Link to="/Contact" className="mt-7 mb-7" onMouseOver={e => (e.target.src = buttonImages.contactButtonB)} onMouseOut={e => (e.target.src = buttonImages.contactButtonA)}>
             {<img src={buttonImages.contactButtonA} alt="Logo" className="h-[20px] w-[70px] m-2" /> }
             </Link>
        </div>
        </div>
      </div>
    );
  }
  
  export default About;