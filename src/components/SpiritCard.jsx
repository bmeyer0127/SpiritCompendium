import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const Specs = (props) => {
  const items = props.cocktail.map((spec) => <li>{spec}</li>);
  return <ul>{items}</ul>;
};

function SpiritCard(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(!show);
  const handleOpen = () => setShow(!show);

  return (
    <div
      className="card d-flex flex-row justify-content-around align-items-center m-3"
      type="button"
      onClick={handleOpen}
    >
      <h2 className="fs-6">{props.spiritName}</h2>
      <div>
        <h4 className="fs-6">{props.typeOfSpirit}</h4>
        <h4 className="fs-6">{props.distillery}</h4>
      </div>
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.spiritName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            <div>
              <div className="p-2 rounded border-secondary-subtle border-bottom border-start">
                <h3 className="fs-6 mt-2 mb-3">
                  This is a {props.typeOfSpirit}
                </h3>
                <h3 className="fs-6 mt-2 mb-3">
                  Distilled by {props.distillery} distillery
                </h3>
                <h3 className="fs-6 mt-2 mb-3">
                  Bottled at {props.proof} proof
                </h3>
              </div>
              <div className="p-2 rounded border-secondary-subtle border-bottom border-start">
                <h4 className="fs-6 mt-2 mb-3">Nose: {props.nose}</h4>
                <h4 className="fs-6 mt-2 mb-3">Palate: {props.palate}</h4>
                <h4 className="fs-6 mt-2 mb-3">Finish: {props.finish}</h4>
              </div>
              <div className="p-2 rounded border-secondary-subtle border-bottom border-start">
                <h3 className="fs-6 mt-2 mb-3">Solid Cocktail:</h3>
                <h4 className="fs-6 mt-2 mb-3">The {props.cocktailName}:</h4>
                <Specs cocktail={props.cocktail} />
                <h4 className="fs-6 mt-2 mb-3">{props.cocktailDescription}</h4>
              </div>
              <p className="fs-6 mt-2 mb-3 p-2">{props.story}</p>
            </div>
          }
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-primary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SpiritCard;
