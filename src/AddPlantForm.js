import './AddPlantForm.css';
import { useState } from 'react';

function AddPlantForm({ showPlantForm, setShowPlantForm, setPlantData }) {

    const [earliestStartBeforeLastFrost, setEarliestStartBeforeLastFrost] = useState("")
    const [latestStartBeforeLastFrost, setLatestStartBeforeLastFrost] = useState("")
    const [plantImage, setPlantImage] = useState("")
    const [plantName, setPlantName] = useState("")

    const addPlant = () => {
        const newPlantData = {
            name: plantName,
            earliestDate: earliestStartBeforeLastFrost,
            latestDate: latestStartBeforeLastFrost,
            img: plantImage
        }

        setPlantData( prevPlantData => {return [...prevPlantData, newPlantData] } )
    }

    function handleSubmit(e) {
        e.preventDefault();
        addPlant()
        resetPlantForm()
    }

    function resetPlantForm() {
        setEarliestStartBeforeLastFrost("")
        setLatestStartBeforeLastFrost("")
        setPlantImage("")
        setPlantName("")
    }

    function handleOnchangeEarliestStartBeforeLastFrost(e) {
        setEarliestStartBeforeLastFrost(e.currentTarget.value)
    }

    function handleOnchangeLatestStartBeforeLastFrost(e) {
        setLatestStartBeforeLastFrost(e.currentTarget.value)
    }

    function handleOnchangePlantImage(e) {
        setPlantImage(e.currentTarget.value)
    }

    function handleOnchangePlantName(e) {
        setPlantName(e.currentTarget.value)
    }

    return (
        <form className={"AddPlantForm"} style={{ display: showPlantForm ? "" : "none" }}>
            <div>
                <div>
                    <label htmlFor="plantName">Name&nbsp;</label>
                    <input onChange={handleOnchangePlantName} value={plantName} type="text" name="plantName" id="plantName"/>
                </div>
                <div>
                    <label htmlFor="plantImage">Picture (url)&nbsp;</label>
                    <input onChange={handleOnchangePlantImage} value={plantImage} type="text" name="plantImage" id="plantImage" />
                </div>
            </div>
            <div>
                <label htmlFor="number">Planting Range (weeks)&nbsp;</label>
                <input type="number" onChange={handleOnchangeLatestStartBeforeLastFrost} value={latestStartBeforeLastFrost} name="latestStartDate" id="latestStartDate" />
                <input type="number" onChange={handleOnchangeEarliestStartBeforeLastFrost} value={earliestStartBeforeLastFrost} name="earliestStartDate" id="earliestStartDate" />
            </div>
            <div>
                <button type="submit" name="add" onClick={handleSubmit}>Save</button>
                <button type="cancel" name="cancel" onClick={() => {
                    resetPlantForm()
                    setShowPlantForm(false)
                }}>Cancel</button>
            </div>
        </form>
    )
}

export default AddPlantForm;