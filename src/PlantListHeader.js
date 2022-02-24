import AddPlant from './AddPlant';
import LastFrostDate from './LastFrostDate';
import AddPlantForm from './AddPlantForm'

import { useState } from 'react'

import './PlantListHeader.css'

function PlantListHeader({plantData, setPlantData, setLastFrostDate, lastFrostDate}) {
    const [showPlantForm, setShowPlantForm] = useState(false)

    return (
        <div className={"PlantListHeader"}>
            <div className={"PlantListHeaderRowOne"}>
                <LastFrostDate setLastFrostDate={setLastFrostDate} lastFrostDate={lastFrostDate}/>
                <AddPlant showPlantForm={ showPlantForm } setShowPlantForm={ setShowPlantForm } />
            </div>
            <div className={"PlantListHeaderForm"}>
                <AddPlantForm showPlantForm={ showPlantForm }
                              setShowPlantForm={ setShowPlantForm }
                              plantData={ plantData }
                              setPlantData={ setPlantData }/>
            </div>
        </div>
    )
}

export default PlantListHeader;