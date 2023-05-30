import Modal from "react-bootstrap/Modal";
import { useState } from "react";

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
              <h3 className="fs-6">{props.typeOfSpirit}</h3>
              <h3 className="fs-6">{props.distillery}</h3>
              <p className="fs-6">{props.story}</p>
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
