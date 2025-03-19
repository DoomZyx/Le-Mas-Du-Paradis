import "./_welcome.scss";

import nature3 from "../../../images/nature3.png";

function Welcome() {
  return (
    <>
      <div className="background-4">
        <img src={nature3} alt="" />
        <div className="layout-welcome">
          <h2>BIENVENUE CHEZ VOUS</h2>
          <h3>
            Dans un mas où tradition et modernité se rencontrent <br /> <br />
            Pour créer une expérience inoubliable
          </h3>
        </div>
      </div>
    </>
  );
}

export default Welcome;
