import React,{useState, useEffect} from 'react'
import {Button,Modal} from 'react-bootstrap'
// import { connect } from 'react-redux'
// import {addToCart} from './../actioncreators/cart'
import axios from 'axios'

const Detail = (props) => {
  const [data, setData] = useState([]);
  const testfun = ((id) =>{
    axios.get(`https://api.juliaveronica.com/item/show/${id}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  useEffect((id) => {
    axios.get(`https://api.juliaveronica.com/item/show`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  // const testimage = "https://i.imgur.com/tq4h23x.jpg"

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
      setShow(true)
    };
    const handleClick = (id) =>{
      // props.addToCart(id);
      setShow(false)
    }
    const showDetail = data.map((data, id) => {
      const URL = "http://3.136.102.205/";
      return(
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{data.name}</Modal.Title>
          </Modal.Header>
            <Modal.Body>
            <img key={id}
            src={`${URL}${data.imageUrl}`}
            alt="Gambar"
            style={{ height: "45%", width: "100%", marginBottom: "5%" }}
            />
            <h4>{data.name}</h4>
            <h5>{data.price}</h5>
            <h6>{data.quantity}</h6>
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
        
      )
    })
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          More Info
        </Button>
        {showDetail}
      </>
    );
}
// const mapStateToProps = (state)=>{
//   return {
//     items: state.items
//   }
// }
// const mapDispatchToProps= (dispatch)=>{
    
//   return{
//       addToCart: (id)=>{dispatch(addToCart(id))}
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Detail)
export default Detail