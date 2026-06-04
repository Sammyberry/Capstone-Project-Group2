import "./PlanetTable.css";

export default function PlanetTable() {
  return (
    <div className="wrapper">
      <h1>Planetary Facts at a Glance</h1>

      <p>
        Below is a comparative table of major planets in our solar system. The data highlights key physical properties used by astronomers and researchers worldwide.
      </p>

      <p>Data about the planets of our solar system (Planetary facts taken from NASA)</p>
      <table className="planet-table">
        <thead>
          <tr>
            <th colSpan={2}></th>
            <th>Name</th>
            <th>Mass (10 24kg)</th>
            <th>Diameter (km)</th>
            <th>Density (kg/m3)</th>
            <th>Gravity (m/s2)</th>
          </tr>
        </thead>

        <tbody>
          {/* Terrestrial Planets */}
          <tr>
            <td rowSpan={4} colSpan={2} className="group">
              Terrestrial Planets
            </td>

            <td>Mercury</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          <tr>
            <td>Venus</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          <tr>
            <td>Earth</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          <tr>
            <td>Mars</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          {/* Jovian Planets */}
          <tr>
            <td rowSpan={4} className="group">
              Jovian
              <br />
              Planets
            </td>

            <td rowSpan={2} className="group">
              Gas Giants
            </td>

            <td>Jupiter</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          <tr>
            <td>Saturn</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          <tr>
            <td rowSpan={2} className="group">
              Ice Giants
            </td>

            <td>Uranus</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          <tr>
            <td>Neptune</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          {/* Dwarf Planets */}
          <tr>
            <td colSpan={2} className="group">
              Dwarf Planets
            </td>

            <td>Pluto</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}