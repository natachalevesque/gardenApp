import './PlantList.css'
import Plant from './Plant.js';
import PlantListHeader from './PlantListHeader';
import { useState } from 'react';


function PlantList({ plantData, setPlantData, searchText }) {
    const [lastFrostDate, setLastFrostDate] = useState(new Date())
    const plants = plantData.map((plant, i) => {
        if (
            plant.name.toLowerCase().indexOf(
                searchText.toLowerCase()
            ) === -1
        ) return null
        return (<Plant plant={plant} lastFrostDate={lastFrostDate} setLastFrostDate={setLastFrostDate} key={i}/>) //TODO: update key to an id
    });

    return (
        <div className={"PlantList"}>
            <PlantListHeader plantData={ plantData } setPlantData={ setPlantData } setLastFrostDate={setLastFrostDate}/>
            {plants}
        </div>
    )
}

export default PlantList;