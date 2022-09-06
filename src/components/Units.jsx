import { useState } from "react"
import unitList from "../assets/units/units"

const Units = () => {

    const [units, setUnits] = useState(unitList);

    return (
        <main className="container">
            <div className="row justify-content-center mt-3">
                <div className="col-8">
                    <div className="card-collection">
            {
                units.map((unit) => (
                    <div id={unit.id} className="card m-2" style={{cursor: "pointer"}}>
                        <img src={unit.profilePic} alt="" className="card-img-top" />
                        
                        <div className="card-body">
                            <h5 className="card-title">{unit.unitName}</h5>
                            <p className="card-text">
                                <ul>
                                    <li>Class: {unit.className}</li>
                                    <li>Gender: {unit.gender}</li>
                                    <li>Hit Points: {unit.stats.hitPoints} / {unit.stats.maxHitPoints} </li>
                                    <li>Attack: {unit.stats.attack}</li>
                                    <li>Defense: {unit.stats.defense}</li>
                                    <li>Accuracy: {unit.stats.accuracy}</li>
                                    <li>Critical: {unit.stats.critical}%</li>
                                    <li>Skills: {unit.skills}</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                ))
            }
                </div>
                </div>
                </div>
        </main>
    );
}

export default Units;