import { useState } from "react";
import Collapse from "../../Collapse/collapse";
import locationData from "../../../data/LocationDetails/location.json";

function Description() {
  const [showDescription, setShowDescription] = useState(false);

  const characteristic = locationData[1]; 

  return (
    <Collapse
      className="description-section"
      title="DESCRIPTION"
      content={
        <>
          <h3 className="mainroom-title">{characteristic.mainroom}</h3>
          <br /> <br />
          <h4>{characteristic.titleKitchen}</h4>
          <ul>
            {characteristic.kitchen.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h4>{characteristic.livingroom}</h4>
          <p>{characteristic.sofa}</p>
          <br />
          <h4>{characteristic.bathroom}</h4>
          <p>{characteristic.equipments}</p>
          <br />
          <h4>{characteristic.mezzanineT}</h4>
          <p>{characteristic.mezzanine}</p>
          <br />
          <h4>{characteristic.laundryroom}</h4>
          <p>{characteristic.laundry}</p>
          <br />
          <h4>{characteristic.terrace}</h4>
          <p>{characteristic.equipmentsT}</p>
        </>
      }
      isOpen={showDescription}
      onToggle={() => setShowDescription(!showDescription)}
    />
  );
}

export default Description;
