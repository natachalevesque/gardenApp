function PlantRow({ row }) {
    return (
        <tr className={"PlantRow"}>
            <td>{row.name}</td>
            <td>{row.earliestDate}</td>
            <td>{row.latestDate}</td>
        </tr>
    );
}

export default PlantRow;