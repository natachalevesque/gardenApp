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
    {name: "Carrots", earliestDate: "05/27/2021", latestDate: "07/27/2021", img: "https://cdn.pixabay.com/photo/2016/11/23/00/22/carrots-1851424_1280.jpg", imgAlt: "Carrot"},
    {name: "Broccoli", earliestDate: "05/27/2021", latestDate: "07/27/2021", img: "https://cdn.pixabay.com/photo/2014/10/19/21/50/broccoli-494754_1280.jpg", imgAlt: "Broccoli"},
    {name: "Tomatoes", earliestDate: "05/27/2021", latestDate: "07/27/2021", img: "https://cdn.pixabay.com/photo/2016/08/01/17/08/tomatoes-1561565_1280.jpg", imgAlt: "Tomato"},
    {name: "Peppers", earliestDate: "05/27/2021", latestDate: "07/27/2021", img: "https://cdn.pixabay.com/photo/2016/10/30/17/32/chili-pepper-1783761_1280.jpg", imgAlt: "Pepper"},
    {name: "Strawberries", earliestDate: "05/27/2021", latestDate: "07/27/2021", img: "https://cdn.pixabay.com/photo/2012/09/16/23/00/strawberries-56995_1280.jpg", imgAlt: "Strawberry"},
    {name: "Zinnias", earliestDate: "05/27/2021", latestDate: "07/27/2021", img: "https://cdn.pixabay.com/photo/2019/02/08/16/58/zinnia-3983596_1280.jpg", imgAlt: "Zinnia"}
];

export default MyGardenPage;

