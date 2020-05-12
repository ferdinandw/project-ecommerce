import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'

const Detail = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          More Info
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ferdinand</Modal.Title>
          </Modal.Header>
            <Modal.Body>
            <img
            src={require("../img/2.png")}
            alt="Gambar"
            style={{ height: "45%", width: "100%", marginBottom: "5%" }}
          />
            <h4>Ferdinand is the best man ever, but he got no girlfriend</h4>
            <h5>Rp 20.000</h5>
            <h6>Remaining Stock : Banyak</h6>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add to Cart
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Detail