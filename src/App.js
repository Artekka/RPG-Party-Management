import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Units from './components/Units'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"
import unitList from "./assets/units/unitList"

function App() {

  const [selectedParty, setParty] = useState("Party 1");

  const [units, setUnits] = useState(unitList);


  function handlePartySelectionChange(e) {
      setParty(e.target.value);
      console.log(e.target.value);
  }

  function handleUnitSelection(e) {
      const newUnits = units.map((unit) => unit.id === parseInt(e.currentTarget.id)
          ? (unit.partyName === selectedParty) ? { ...unit, partyName: "None" } : { ...unit, partyName: selectedParty }
          : unit);
      setUnits(newUnits);
  }

  return (

    <div>
      <Header
        selectedParty={selectedParty}
        partyMemberCount={units.filter((unit) => unit.partyName === selectedParty).length}
      />
      <Units
        units={units}
        selectedParty={selectedParty}
        handlePartySelectionChange={handlePartySelectionChange}
        handleUnitSelection={handleUnitSelection}
      />
      <Footer />
    </div>
  );
}

export default App;
