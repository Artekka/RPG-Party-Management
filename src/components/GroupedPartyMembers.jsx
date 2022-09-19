import { useState } from "react"


const GroupedPartyMembers = ({ units, selectedParty, setParty }) => {
    
    const [groupedUnits, setGroupedData] = useState(groupedPartyMembers);

    function groupedPartyMembers() {
        let parties = []

        let unitsInParty1 = units.filter((unit) => unit.partyName === "Party 1")
        let party1 = { party: "Party 1", units: unitsInParty1, collapsed: selectedParty === "Party 1" ? false : true }
        parties.push(party1)

        let unitsInParty2 = units.filter((unit) => unit.partyName === "Party 2")
        let party2 = { party: "Party 2", units: unitsInParty2, collapsed: selectedParty === "Party 2" ? false : true }
        parties.push(party2)
        
        let unitsInParty3 = units.filter((unit) => unit.partyName === "Party 3")
        let party3 = { party: "Party 3", units: unitsInParty3, collapsed: selectedParty === "Party 3" ? false : true }
        parties.push(party3)

        let unitsInParty4 = units.filter((unit) => unit.partyName === "Party 4")
        let party4 = { party: "Party 4", units: unitsInParty4, collapsed: selectedParty === "Party 4" ? false : true }
        parties.push(party4)

        return parties;
    }

    function handlePartyClick(e) {
        let newGroupedData = groupedUnits.map((groupedData) => groupedData.party === e.currentTarget.id
            ? { ...groupedData, collapsed: !groupedData.collapsed }
            : groupedData);
        
        setGroupedData(newGroupedData);
        setParty(e.currentTarget.id);

    }
    return (
        <main className="container">
            {groupedUnits.map((party) => {
                    return (
                        <div key={party.party} className='card mt-2' style={{ cursor: "pointer" }}>
                            <h4 id={party.party} className='card-header text-secondary bg-white' onClick={handlePartyClick}>
                                {party.party}
                            </h4>
                            <div id={"collapse_" + party.party} className={party.collapsed === true ? "collapse" : ""}>
                            {
                                party.units.map(unit => {
                                    return (
                                        <div className="mt-2">
                                            <h5 className="card-title mt-2">
                                                <span className="text-dark">
                                                    Name: {unit.unitName}
                                                </span>
                                            </h5>
                                            <p>Class: {unit.className}</p>
                                            </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default GroupedPartyMembers