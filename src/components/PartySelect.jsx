const PartySelect = ({ selectedParty, handlePartySelectionChange }) => {
    return (
        <div className="text-center">
            <button value="Party 1" className="btn btn-outline-success" onClick={handlePartySelectionChange}>Party 1</button>
            <button value="Party 2" className="btn btn-outline-success" onClick={handlePartySelectionChange}>Party 2</button>
            <button value="Party 3" className="btn btn-outline-success" onClick={handlePartySelectionChange}>Party 3</button>
            <button value="Party 4" className="btn btn-outline-success" onClick={handlePartySelectionChange}>Party 4</button>
            <button value="Party 5" className="btn btn-outline-success" onClick={handlePartySelectionChange}>Party 5</button>
        </div>
        )
}

export default PartySelect;