import SpiritCard from "./components/SpiritCard";
import SpiritData from "./spirit-data/SpiritData.json";

function App() {
  return (
    <div>
      <div className="d-flex flex-row container mt-3">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Spirit:{" "}
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="spirit name"
            aria-label="spirit name"
          ></input>
        </div>
        <button type="button" className="btn btn-info mb-3 ms-3">
          {<ion-icon name="search-outline"></ion-icon>}
        </button>
      </div>
      <div className="container">
        {SpiritData.map((spirit) => {
          return (
            <SpiritCard
              key={spirit.spiritName}
              spiritName={spirit.spiritName}
              typeOfSpirit={spirit.typeOfSpirit}
              distillery={spirit.distillery}
              story={spirit.story}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
