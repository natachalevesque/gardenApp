import './AddPlant.css';

function AddPlant({ showPlantForm, setShowPlantForm }) {

    return (
        <div>
            <form className={"AddPlant"}>
                <button type="button" name="add" onClick={() => setShowPlantForm(!showPlantForm)}>Add</button>
            </form>
        </div>
    )
}

export default AddPlant;