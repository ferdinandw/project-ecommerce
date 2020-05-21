import React, { useState, useEffect } from "react";
import { Button, Modal, Card, Container, Row, Col, Image } from "react-bootstrap";
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
      <Container className="mt-4 mb-4" fluid>
        <Card key={index}>
          <Row>
            <Col md={6}>
            <Image
              src={`${URL}${item.imageUrl}`}
              alt="Gambar"
              fluid
            />
            </Col>
            <Col md={6} className="flex flex-row">
              <h2>{data.name}</h2>
              <h3>Rp {data.price}</h3>
              <h6>Remaining Stock : {data.quantity}</h6>
              <p>{data.description}</p>
              <div className="pt-4 mt-12" style={{marginTop: "200px"}}>
              <button className="mr-4 btn btn-outline-light btn-secondary">Add To Cart</button>
              <button className="btn btn-primary">Buy Now</button>
              </div>
              
            </Col>
          </Row>
        </Card>
        </Container>

      )
    })
    return (
      <div>
        {showDetail}
      </div>
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
export default Detail;
