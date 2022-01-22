import AddPlant from './AddPlant';
import LastFrostDate from './LastFrostDate';
import AddPlantForm from './AddPlantForm'

import { useState } from 'react'

import './PlantListHeader.css'

function PlantListHeader() {
    const [showPlantForm, setShowPlantForm] = useState(false)

    return (
        <div className={"PlantListHeader"}>
            <div className={"PlantListHeaderRowOne"}>
                <LastFrostDate />
                <AddPlant showPlantForm={ showPlantForm } setShowPlantForm={ setShowPlantForm } />
            </div>
            <div className={"PlantListHeaderForm"}>
                <AddPlantForm showPlantForm={ showPlantForm } />
            </div>
        </div>
    )
}

export default PlantListHeader;