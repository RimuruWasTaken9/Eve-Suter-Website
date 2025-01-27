import {  squareButtons } from "../assets/imageURLs.js";
import { useState } from "react";

function IMGButtons(props) {
    const [currentIMG, setCurrentIMG] = useState(0)
    function selectIMG(event) {
        setCurrentIMG(event.target.name);
        props.onChecked(event.target.name);
        event.preventDefault();
    }
    return (

        <div className=" flex flex-row gap-25 justify-center">
            {currentIMG == 0 ? <img src={squareButtons.selected} name={0} className="mt-7 mb-7"/> :
             <a className="mt-7 mb-7"  onClick={selectIMG} onMouseOver={e => (e.target.src = squareButtons.selected)} onMouseOut={e => (e.target.src = squareButtons.unselected)}>
             {<img src={squareButtons.unselected} name={0} className=""/>}
             </a> }
             {currentIMG == 1 ? <img src={squareButtons.selected} name={1} className="mt-7 mb-7"/> :
             <a className="mt-7 mb-7"  onClick={selectIMG} onMouseOver={e => (e.target.src = squareButtons.selected)} onMouseOut={e => (e.target.src = squareButtons.unselected)}>
             {<img src={squareButtons.unselected} name={1} className=""/>}
             </a> }
             {currentIMG == 2 ? <img src={squareButtons.selected} name={2} className="mt-7 mb-7"/> :
             <a className="mt-7 mb-7"  onClick={selectIMG} onMouseOver={e => (e.target.src = squareButtons.selected)} onMouseOut={e => (e.target.src = squareButtons.unselected)}>
             {<img src={squareButtons.unselected} name={2} className=""/>}
             </a> }
             {currentIMG == 3 ? <img src={squareButtons.selected} name={3} className="mt-7 mb-7"/> :
             <a className="mt-7 mb-7"  onClick={selectIMG} onMouseOver={e => (e.target.src = squareButtons.selected)} onMouseOut={e => (e.target.src = squareButtons.unselected)}>
             {<img src={squareButtons.unselected} name={3} className=""/>}
             </a> }
             
        </div>
        
    )
}

export default IMGButtons;