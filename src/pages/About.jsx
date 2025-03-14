import Navbar from "@/components/Navbar";
import { profileImages } from "../assets/imageURLs.js";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="block min-h-[673px] min-w-[750px] shrink">

      <div className="flex flex-col m-3 min-h-screen content-center items-center">
        <div className="w-[717.99px]">
          <Link to="/">
            <img src={profileImages.nameImage} alt="Logo" className="w-max h-max pt-9 pb-8 self-start" />
          </Link>

          <div className="mt-1 grid grid-cols-[350px_1fr] gap-25">
            <div className="">
              <p className="text-yellow-700 py-1">About Eve:</p>

              <p className="text-zinc-500 py-1 ">Swiss-born Eve Suter graduated with honors from the <br /> Lullier Horticulture School in
                <span className="text-yellow-700"> Geneva</span>. She followed the <br />
                three-year program with a two-year Swiss apprenticeship <br /> as a flower design.
              </p>

              <p className="text-zinc-500 py-1">In 1991, Eve traveled to Japan where she met Mami Kawasaki,<br />
                the founder of the Mami Flower Design School in <span className="text-yellow-700"> Tokyo</span>.<br />
                She became an instructor at the school and lived in Japan for<br />
                seven years. During her stay, Eve participated in floral <br />
                exhibiitions in Japan as well as in Korea and Taiwan, and <br />
                was published in a variety of books and magazines.
              </p>

              <p className="text-zinc-500 py-1">Eve has had solo exhibitions of her work in Japan, Switzerland,<br />
                and the United States.</p>

              <p className="text-zinc-500 py-1">She currently lives in <span className="text-yellow-700"> New York </span>City.<br />
                She works with corporate and private clients,<br />
                does event and sculptural design, and teaches.
              </p>
            </div>
            <img src={profileImages.profileImage} alt="Logo" className="w-max h-max" />
          </div>
          <div className="pt-6">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;