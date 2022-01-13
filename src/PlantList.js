import './PlantList.css'
import Plant from './Plant.js';
import PlantListHeader from './PlantListHeader'


function PlantList({ plantData, searchText }) {

    const plants = plantData.map((plant, i) => {
        if (
            plant.name.toLowerCase().indexOf(
                searchText.toLowerCase()
            ) === -1
        ) return null
        return (<Plant plant={plant} key={i}/>) //TODO: update key to something better
    });


    return (
        <div className={"PlantList"}>
            <PlantListHeader />
            {plants}
        </div>
    )
}

export default PlantList;