import React,{useState, useEffect} from 'react'
import {Button,Modal, Card,Container} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
// import { connect } from 'react-redux'
// import {addToCart} from './../actioncreators/cart'
import axios from 'axios'

const Detail = () => {
  const {id} = useParams()
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.juliaveronica.com/item/show/${id}`).then((res) => {
      
      const data = res.data
      // console.log(data)
      setData(data);
      
    });
  },[id]);
  // const testimage = "https://i.imgur.com/tq4h23x.jpg"

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true)
    };
    const handleClick = () =>{
      // props.addToCart(id);
      setShow(false)
    }
    const showDetail = [data].map((item,index) => {
      const URL = "http://3.136.102.205/";
      return(
        <Container>
        <Card key={index}>
          <Card.Header>
            <Card.Title>{item.name}</Card.Title>
          </Card.Header>
            <Card.Body>
            <Card.Img
            src={`${URL}${item.imageUrl}`}
            alt="Gambar"
            />
<<<<<<< HEAD
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
        
=======
            <h3>{item.name}</h3>
            <h4>Rp {item.price}</h4>
            <h5>Remaining Stock : {item.quantity}</h5>
            <h6>{item.description}</h6>
            </Card.Body>
        </Card>
        </Container>
>>>>>>> 62c4c35c6e475ee1d6f16176ce324fd3eec3aee6
      )
    })
    return (
      <>
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