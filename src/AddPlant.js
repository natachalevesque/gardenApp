import './AddPlant.css'

function AddPlant({ AddRow, setAddRow }) {
    return (
        <div className={"TableRow"}>
            <form id={"AddRow"}>
                <input type="text" name="name" id="name" onChange={e => setAddRow({ name: e.target.value.name })}/>
                <input type="date" name="earliestDate" id="earliestDate" />
                <input type="date" name="latestDate" id="latestDate" />
                <button type="submit" name="add" onClick={console.log(AddRow)}>Add</button>
            </form>
        </div>
    )
}

export default AddPlant;