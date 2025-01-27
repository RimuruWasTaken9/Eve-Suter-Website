import {  squareButtons } from "../assets/imageURLs.js";


function IMGButtons(props) {

    function selectIMG(event) {
        props.onChecked(event.target.name);
        event.preventDefault();
    }
    return (
        <div className="pt-1 grid grid-cols-4">
            
             <a className="m-7"  onClick={selectIMG} onMouseOver={e => (e.target.src = squareButtons.selected)} onMouseOut={e => (e.target.src = squareButtons.unselected)}>
             {<img src={squareButtons.unselected} name={0} alt="Logo" className=""/> }
             </a> 
             <a className="m-7 "  onClick={selectIMG} onMouseOver={e => (e.target.src = squareButtons.selected)} onMouseOut={e => (e.target.src = squareButtons.unselected)}>
             {<img src={squareButtons.unselected} name={1} alt="Logo" className=""/> }
             </a> 
             <a className="m-7 "  onClick={selectIMG} onMouseOver={e => (e.target.src = squareButtons.selected)} onMouseOut={e => (e.target.src = squareButtons.unselected)}>
             {<img src={squareButtons.unselected} name={2} alt="Logo" className=""/> }
             </a> 
             <a className="m-7 "  onClick={selectIMG} onMouseOver={e => (e.target.src = squareButtons.selected)} onMouseOut={e => (e.target.src = squareButtons.unselected)}>
             {<img src={squareButtons.unselected} name={3} alt="Logo" className=""/> }
             </a> 
             
        </div>
    )
}

export default IMGButtons;