import { useState } from "react";

import Collapse from "../../Collapse/collapse";
import location from "../../../data/LocationDetails/location.json";

import { useTranslation } from "react-i18next";

function Atouts() {
  const [showStrength, setShowStrength] = useState(false);
  const { i18n } = useTranslation();

  const strength = location[0];

  return (
    <Collapse
      className="atouts-section"
      title={strength.titlea[i18n.language]}
      content={
        <>
          <h3>{strength.capacities[i18n.language]}</h3>
          <h3 className="title">{strength.title[i18n.language]}</h3>
          <ul>
            {strength.atouts.map((atout, index) => (
              <li key={index}>{atout[i18n.language]}</li>
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
