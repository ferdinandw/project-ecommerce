import React, { useState, useEffect } from "react";
import { Button, Modal, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import { connect } from 'react-redux'
// import {addToCart} from './../actioncreators/cart'
import axios from "axios";
import "./detail.css";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.juliaveronica.com/item/show/${id}`).then((res) => {
      const data = res.data;
      // console.log(data)
      setData(data);
    });
  }, [id]);
  // const testimage = "https://i.imgur.com/tq4h23x.jpg"

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClick = () => {
    // props.addToCart(id);
    setShow(false);
  };
  const showDetail = [data].map((item, index) => {
    const URL = "http://3.136.102.205/";
    return (
      <Container className="mt-4">
        <Card key={index}>
          <Card.Header>
            <Card.Title>{item.name}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Img
              className="detail-img mb-4"
              src={`${URL}${item.imageUrl}`}
              alt="Gambar"
            />
            <h3>{item.name}</h3>
            <h4>Rp {item.price}</h4>
            <h5>Remaining Stock : {item.quantity}</h5>
            <h6>{item.description}</h6>
          </Card.Body>
        </Card>
      </Container>
    );
  });
  return <>{showDetail}</>;
};
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
export default Detail;
