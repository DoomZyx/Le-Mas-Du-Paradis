import "./_wish.scss";

import nature4 from "../../../images/nature4.webp";

function Wish() {
  return (
    <>
      <div className="background-3">
        <img src={nature4} alt="" />
        <div className="wish-layout">
          <h2>NOTRE SOUHAIT 🪄</h2>
          <p>
            Nous espérons que vous ressentirez tout l’amour et l’attachement qui
            ont donné vie à ce projet
            <br /> <br />
            Que ce mas devienne un lieu de repos, de ressourcement et de moments
            précieux en famille ou entre amis
          </p>
        </div>
      </div>
    </>
  );
}

export default Wish;
