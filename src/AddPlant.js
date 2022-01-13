import './AddPlant.css';

function AddPlant() {

    return (
        <div>
            <form className={"AddPlant"}>
                <button type="button" name="add" onClick={console.log("Hello World")}>Add</button>
            </form>
        </div>
    )
}

export default AddPlant;