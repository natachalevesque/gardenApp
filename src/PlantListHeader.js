import AddPlant from './AddPlant';
import LastFrostDate from './LastFrostDate';
import AddPlantForm from './AddPlantForm'

import './PlantListHeader.css'

function PlantListHeader() {

    return (
        <div className={"PlantListHeader"}>
            <div className={"PlantListHeaderRowOne"}>
                <LastFrostDate />
                <AddPlant />
            </div>
            <div className={"PlantListHeaderForm"}>
                <AddPlantForm />
            </div>
        </div>
    )
}

export default PlantListHeader;