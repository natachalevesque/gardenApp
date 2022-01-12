import './Plant.css'

function Plant({ plant }) {

    return (
        <div className={"Plant"}>
            <img src={plant.img} alt={plant.imgAlt}/>
            <p>I'm a {plant.name}</p>
        </div>
    )
}


export default Plant;