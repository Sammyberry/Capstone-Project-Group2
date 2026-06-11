import React from "react";
import "./PlanetTable.css";

const PlanetaryTable = () => {
  return (
    <section id="table-section">
      <h2>Planetary Facts at a Glance</h2>
      <p>
        Below is a comparative table of major planets in our solar system. The
        data highlights key physical properties used by astronomers worldwide.
      </p>

      <table border="1" cellPadding="10" cellSpacing="0">
        <caption>
          Data about the planets of our solar system. (Planetary facts taken
          from NASA)
        </caption>

        <thead>
          <tr>
            <th scope="col" colSpan={2}></th>
            <th scope="col">Name</th>
            <th scope="col">Mass (10²⁴ kg)</th>
            <th scope="col">Diameter (km)</th>
            <th scope="col">Density (kg/m³)</th>
            <th scope="col">Gravity (m/s²)</th>
          </tr>
        </thead>

        <tbody>
          {/* Terrestrial Planets */}
          <tr>
            <th scope="rowgroup" rowSpan={4} colSpan={2}>
              Terrestrial Planets
            </th>
            <td>Mercury</td>
            <td>0.330</td>
            <td>4878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          <tr>
            <td>Venus</td>
            <td>0.330</td>
            <td>4879</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          <tr>
            <td>Earth</td>
            <td>0.330</td>
            <td>4879</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          <tr>
            <td>Mars</td>
            <td>0.330</td>
            <td>4879</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          {/* Jovian Planets - Gas Giants */}
          <tr>
            <th scope="rowgroup" rowSpan={4}>
              Jovian Planets
            </th>
            <th scope="rowgroup" rowSpan={2}>
              Gas Giants
            </th>
            <td>Jupiter</td>
            <td>0.330</td>
            <td>4878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          <tr>
            <td>Saturn</td>
            <td>0.330</td>
            <td>4878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          {/* Jovian Planets - Ice Giants */}
          <tr>
            <th scope="row" rowSpan={2}>
              Ice Giants
            </th>
            <td>Uranus</td>
            <td>0.330</td>
            <td>4878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          <tr>
            <td>Neptune</td>
            <td>0.330</td>
            <td>4878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          {/* Dwarf Planets */}
          <tr>
            <th scope="row" colSpan={2}>
              Dwarf Planets
            </th>
            <td>Pluto</td>
            <td>0.330</td>
            <td>4878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default PlanetaryTable;