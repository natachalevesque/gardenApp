import './PlantRow.css'

function PlantRow({ row }) {
    return (
        <div className={"TableRow"}>
            <p className={"TableCell"}>{row.name}</p>
            <p className={"TableCell"}>{row.earliestDate}</p>
            <p className={"TableCell"}>{row.latestDate}</p>
        </div>
    );
}

export default PlantRow;