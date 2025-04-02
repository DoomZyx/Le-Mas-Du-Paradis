import { useState } from "react";
import Collapse from "../../Collapse/collapse";
import locationData from "../../../data/LocationDetails/location.json";

import { useTranslation } from "react-i18next";

function Description() {
  const [showDescription, setShowDescription] = useState(false);
  const { i18n } = useTranslation();

  const characteristic = locationData[1];

  return (
    <Collapse
      className="description-section"
      title={characteristic.title[i18n.language]}
      content={
        <>
          <h3 className="mainroom-title">
            {characteristic.mainroom[i18n.language]}
          </h3>
          <br /> <br />
          <h4>{characteristic.titleKitchen[i18n.language]}</h4>
          <ul>
            {characteristic.kitchen.map((kitchen, index) => (
              <li key={index}>{kitchen[i18n.language]}</li>
            ))}
          </ul>
          <h4>{characteristic.livingroom[i18n.language]}</h4>
          <p>{characteristic.sofa[i18n.language]}</p>
          <br />
          <h4>{characteristic.bathroom[i18n.language]}</h4>
          <p>{characteristic.equipments[i18n.language]}</p>
          <br />
          <h4>{characteristic.mezzanineT[i18n.language]}</h4>
          <p>{characteristic.mezzanine[i18n.language]}</p>
          <br />
          <h4>{characteristic.laundryroom[i18n.language]}</h4>
          <p>{characteristic.laundry[i18n.language]}</p>
          <br />
          <h4>{characteristic.terrace[i18n.language]}</h4>
          <p>{characteristic.equipmentsT[i18n.language]}</p>
        </>
      }
      isOpen={showDescription}
      onToggle={() => setShowDescription(!showDescription)}
    />
  );
}

export default Description;
