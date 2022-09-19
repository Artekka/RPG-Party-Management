const PartySelect = ({ selectedParty, handlePartySelectionChange }) => {
    return (
        <select className="form-select form-select-lg" value={selectedParty} onChange={handlePartySelectionChange}>
            <option value="Party 1">Party 1</option>
            <option value="Party 2">Party 2</option>
            <option value="Party 3">Party 3</option>
            <option value="Party 4">Party 4</option>
            <option value="Party 5">Party 5</option>
            </select>
        )
}

export default PartySelect;