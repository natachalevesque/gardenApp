import './PlantRow.css'

function PlantRow({ row }) {
    return (
        <tr className={"TableRow"}>
            <td className={"TableCell"}>{row.name}</td>
            <td className={"TableCell"}>{row.earliestDate}</td>
            <td className={"TableCell"}>{row.latestDate}</td>
        </tr>
    );
}

export default PlantRow;