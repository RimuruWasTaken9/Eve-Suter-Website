import { contactImages } from "../assets/imageURLs.js";
import  Navbar  from "@/components/Navbar";

function Contact() {
    return (
      <div className="flex flex-col m-3 min-h-screen content-center items-center">
        <div >
          <img src={contactImages.logo}  alt="Logo" className="w-max pt-1 h-max self-start" />
        
        <div className="mt-1 grid grid-cols-[300px_1fr] gap-25">
          <div className="text-start self-center">
            <p className="text-zinc-500">eve suter design</p>
            <p className="text-zinc-500">new york city</p>
            <p className="text-zinc-500">917. 836. 9718</p>
            <p className="text-zinc-500">eve@evesuter.com</p>
            <a><img src={contactImages.instagram} alt="instagram logo" className="mt-7 w-10 h-10" /></a>
          </div>
        <img src={contactImages.sideImage}  alt="Logo" className="w-max h-max" />
        </div>
        <Navbar/>
        </div>
      </div>
      
    );
  }
  
  export default Contact;