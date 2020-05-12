import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import { connect } from 'react-redux'
import {addToCart} from './../actioncreators/cart'

const Detail = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = (id) =>{
      // props.addToCart(id);
      setShow(false)
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          More Info
        </Button>
        <Modal show={show} onHide={handleClose} key={props.items.id}>
          <Modal.Header closeButton>
            <Modal.Title>{props.items.title}</Modal.Title>
          </Modal.Header>
            <Modal.Body>
            <img
            src={require("../img/2.png")}
            alt="Gambar"
            style={{ height: "45%", width: "100%", marginBottom: "5%" }}
          />
            <h4>Lorem Ipsum</h4>
            <h5>Rp 20.000</h5>
            <h6>Remaining Stock : Banyak</h6>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClick}>
              Add to Cart
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}
const mapDispatchToProps= (dispatch)=>{
    
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)