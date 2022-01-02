import './NewRow.css'

function NewRow() {
    return (
        <div className={"TableRow"}>
            <form id={"AddRow"}>
                <input type="text" name="name" id="name" />
                <input type="date" name="earliestDate" id="earliestDate" />
                <input type="date" name="latestDate" id="latestDate" />
            </form>
        </div>
    )
}

export default NewRow;