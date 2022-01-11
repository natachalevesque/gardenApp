import './PlantList.css'
import Plant from './Plant.js';
import { useState } from 'react';


function PlantList({ plantData, searchText }) {

    const {AddRow, setAddRow} = useState([{
        name: '',
        earliestDate: '',
        latestDate: ''
    }]);

    const plants = plantData.map((plant, i) => {
        return (<Plant plant={plant} key={i}/>) //TODO: update key to something better
    });


    return (
        <div className={"plantList"}>
            {plants}
        </div>
    )
}

export default PlantList;