import React from "react";

import aboutStyles from "../styles/About.module.css";

const about = () => {
  return (
    <div className={aboutStyles.main}>
      <div>
        <h1>Astro Supply</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem
          error at iusto omnis incidunt nam molestias esse commodi
          necessitatibus temporibus dolor fugiat, ipsa saepe enim mollitia
          laborum dolores rerum consectetur sint neque! Unde natus nobis ullam
          nulla suscipit doloribus expedita itaque corrupti necessitatibus nemo,
          voluptatibus, quisquam, facere illo modi beatae eius esse?
          Perferendis, aperiam eaque impedit qui iure, adipisci praesentium illo
          natus nemo cumque hic blanditiis, minus nihil fugit labore libero
          consequuntur mollitia dicta nam veniam ipsum in. Aut earum totam optio
          eum facere aspernatur magnam alias beatae, obcaecati vitae deserunt
          labore ex unde culpa similique fuga at repellat.
        </p>
      </div>

      <img src="/milkyway.jpg"></img>
    </div>
  );
};

export default about;
