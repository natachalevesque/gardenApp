import './App.css';
import Header from './Header.js';
import Table from './Table.js';
import Navbar from './Navbar.js';

function MyGardenPage() {
    return(
        <div className={"plantPage"}>
            <Navbar/>
            <Table data={ PLANTS }/>
        </div>
    )
}

const PLANTS = [
    {name: "Carrots", earliestDate: "05/27/2021", latestDate: "07/27/2021"},
    {name: "Broccoli", earliestDate: "05/27/2021", latestDate: "07/27/2021"},
    {name: "Tomatoes", earliestDate: "05/27/2021", latestDate: "07/27/2021"},
    {name: "Peppers", earliestDate: "05/27/2021", latestDate: "07/27/2021"},
    {name: "Strawberries", earliestDate: "05/27/2021", latestDate: "07/27/2021"},
    {name: "Zinnias", earliestDate: "05/27/2021", latestDate: "07/27/2021"}
];

export default MyGardenPage;

