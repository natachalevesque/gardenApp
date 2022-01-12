import './Plant.css'

function Plant({ plant }) {

    return (
        <div className={"Plant"}>
            <img src={plant.img} alt={plant.imgAlt}/>
            <h3>{plant.name}</h3>
        </div>
    )
}


export default Plant;