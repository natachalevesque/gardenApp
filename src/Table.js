import PlantRow from './PlantRow.js';

function Table({ data }) {
    const rows = [];

    data.forEach((row) => {
        rows.push(
            <PlantRow
                row={row}
                key={row.name}/>
        );
    });

    return (
        <table className={"Table"}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Earliest Date</th>
                <th>Latest Date</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

export default Table;