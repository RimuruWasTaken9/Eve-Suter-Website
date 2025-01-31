import { Link } from "react-router-dom";

function CreateLink(props) {

    return (
        <div className="">
            <div className="rounded-full float-left h-4 w-3 mt-10 mx-3 p-0 bg-black"></div>   
                <div className="inline-block">
                <Link to={props.page} className="mt-10 mb-10 relative text-gray-400 no-underline hover:text-secondary before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-135">
                    <p className="big">{props.content}</p>
                </Link> 
                </div>
                
        </div>
    )
};

export default CreateLink;