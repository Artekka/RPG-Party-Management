const Header = ({selectedParty, partyMemberCount}) => {
    return (
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1>RPG Party Management</h1>
                    <h3>Party selected: {selectedParty}</h3>
                    <h3>Units selected: {partyMemberCount}/5</h3>
                </div>
            </div>
        </header>
    )
}

export default Header