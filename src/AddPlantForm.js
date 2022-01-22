import './AddPlantForm.css'

function AddPlantForm({ showPlantForm }) {

    return (
        <div className={"AddPlantForm"} style={{ display: showPlantForm ? "" : "none" }}>
            <div>
                <div>
                    <label htmlFor="name">Name&nbsp;</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="image">Picture&nbsp;</label>
                    <input type="text" name="image" id="image" />
                </div>
            </div>
            <div>
                <label htmlFor="number">Planting Range (weeks)&nbsp;</label>
                <input type="number" name="earliestStartDate" id="earliestStartDate" />
                <input type="number" name="lastestStartDate" id="lastestStartDate" />
            </div>
            <div>
                <button type="submit" name="add" onClick={console.log("Save")}>Save</button>
                <button type="cancel" name="cancel" onClick={console.log("Cancel")}>Cancel</button>
            </div>
        </div>
    )
}

export default AddPlantForm;