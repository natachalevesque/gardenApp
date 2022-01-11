import './App.css';
import PlantList from './PlantList.js';
import Navbar from './Menus/Navbar.js';
import { useState } from 'react';

function MyGardenPage() {

    const [searchText, setSearchText] = useState('');

    return(
        <div className={"plantPage"}>
            <Navbar search={ searchText } setSearchText={ setSearchText } />
            <PlantList plantData={ PLANTS } searchText={ searchText } />
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

