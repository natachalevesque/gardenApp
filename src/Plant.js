import './Plant.css';
import {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function Plant({plant}) {

    const [showRemoveButton, setShowRemoveButton] = useState("hide")

    return (
        <div className={"PlantLine"}
             onMouseEnter={() => setShowRemoveButton("show")}
             onMouseLeave={() => setShowRemoveButton("hide")}>
            <div className={"PlantInfo"}>
                <img src={plant.img} alt={plant.imgAlt}/>
                <h3>{plant.name}</h3>
            </div>
            <button className={`removeButton ${showRemoveButton}`}
            ><DeleteIcon/></button>
        </div>
    )
}


export default Plant;