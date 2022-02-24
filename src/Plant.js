import './Plant.css';
import {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { format, subDays, parseISO } from 'date-fns'

function Plant({plant, lastFrostDate, setLastFrostDate}) {

    const NUMBER_OF_DAYS_IN_WEEK = 7
    const [showRemoveButton, setShowRemoveButton] = useState("hide")

    function computeStartDates(weekNumber) {
        const numberOfDayBeforeLastFrostDate = NUMBER_OF_DAYS_IN_WEEK*weekNumber
        let date = lastFrostDate
        if (typeof lastFrostDate === 'string') {
            date = parseISO(lastFrostDate)
        }
        return format(subDays(date, numberOfDayBeforeLastFrostDate), 'LLL-dd')
    }

    const earliestStartDate = computeStartDates(plant.earliestDate)
    const latestStartDate = computeStartDates(plant.latestDate)

    return (
        <div className={"PlantLine"}
             onMouseEnter={() => setShowRemoveButton("show")}
             onMouseLeave={() => setShowRemoveButton("hide")}>
            <div className={"PlantInfo"}>
                <img src={plant.img ? plant.img : plant.name} alt={ plant.imgAlt ? plant.imgAlt : plant.name}/>
                <h3>{plant.name}</h3>
            </div>
            <div className={"PlantInfo"}>
                <p>{earliestStartDate} - {latestStartDate}</p>
            </div>
            <button className={`removeButton ${showRemoveButton}`}
        </div>
    )
}


export default Plant;