import { useState } from "react";

import Collapse from "../../Collapse/collapse";
import location from "../../../data/LocationDetails/location.json";
function Atouts() {
  const [showStrength, setShowStrength] = useState(false);

  const strength = location[0];

  return (
    <Collapse
      className="atouts-section"
      title="LES ATOUTS"
      content={
        <>
          <p>{strength.capacities}</p>
          <h3 className="title">{strength.title}</h3>
          <ul>
            {strength.atouts.map((atouts, index) => (
              <li key={index}>{atouts}</li>
            ))}
          </ul>
        </>
      }
      isOpen={showStrength}
      onToggle={() => setShowStrength(!showStrength)}
    />
  );
}

export default Atouts;
