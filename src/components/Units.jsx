import unitList from "../assets/units/unitList"
import PartySelect from "./PartySelect";

const Units = ({units,selectedParty,handlePartySelectionChange,handleUnitSelection}) => {



    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <PartySelect
                        units={units}
                        selectedParty={selectedParty}
                        handlePartySelectionChange={handlePartySelectionChange}
                        handleUnitSelection={handleUnitSelection}
                    />
                </div>
            </div>
            
            <div className="row justify-content-center mt-3">
                <div className="col-8">
                    <div className="card-collection">
                        {
                            units.map((unit) => (
                                <div key={unit.id} id={unit.id} className={(unit.partyName === selectedParty?'card m-2 unitSelected':'card m-3')} style={{cursor: "pointer"}} onClick={handleUnitSelection}>
                        <img src={unit.profilePic} alt="" className="card-img-top" />
                        
                        <div className="card-body">
                            <h5 className="card-title">{unit.unitName}</h5>
                            
                                <ul className="card-text">
                                    <li>Class: {unit.className}</li>
                                    <li>Gender: {unit.gender}</li>
                                    <li>Hit Points: {unit.stats.hitPoints} / {unit.stats.maxHitPoints} </li>
                                    <li>Attack: {unit.stats.attack}</li>
                                    <li>Defense: {unit.stats.defense}</li>
                                    <li>Accuracy: {unit.stats.accuracy}</li>
                                    <li>Critical: {unit.stats.critical}%</li>
                                    <li>Skills: {unit.skills}</li>
                                    <li>Party: {unit.partyName}</li>
                                </ul>
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