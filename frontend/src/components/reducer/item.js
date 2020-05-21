import React, { useState, useEffect } from "react";
import axios from "axios";
import Detail from "./../detail/detail";
import { beli } from "./../actioncreators/cart";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./item.css";
import Cartt from './../cart/Test'

import { Button, Modal, Card } from "react-bootstrap";

const Test = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.juliaveronica.com/item/show").then((res) => {
      console.log(res.data);
      const data = res.data
      setData(data);
    });
  }, []);
  // const handleClick = (id) => {
  //   props.addToCart(id);
  //   // isAdd= false
  // };
  // const testimage = "https://i.imgur.com/tq4h23x.jpg";
  // const beli = () => {
  //   props.beli(data.id)
  //   console.log(`saya beli ${data.name}`);
  // }

  const showData = data.map((item, index) => {
    const URL = "http://3.136.102.205/";
    return (
      <div className="col-md-3 ">
        <div className="card" style={{ minHeight: "100px" }} key={index}>

          <img
            src={`${URL}${item.imageUrl}`}
            alt={item.name}
            className="card-img-top"
            // style={{ height: "200px", width: "100%" }}
          />
          <h4 className="card-title">{item.name}</h4>
          <div className="card-content">
            <p>Remaining Stock : {item.quantity}</p>
            <p>
              <b>Price: Rp {item.price}</b>
            </p>
          </div>
          {/* <br /> */}
          {/* <h4 className="product-name">{data.name}</h4>
          <p className="product-price">{data.price}</p> */}
          {/* <Counter
            quantity={item.quantity}
            // updateQuantity={this.props.updateQuantity}
            // resetQuantity={this.resetQuantity}
          /> */}
          <div className="card-footer">
            <div className="text-center">
              <Link className="btn btn-primary" target="_blank" to={`/item/${item.id}`}>
                Detail
              </Link>
            </div>
            <Cartt key={item.id} cart={item}/>
            {/* <div className="col-md-6">
              <button
                className="btn btn-outline-dark"
                onClick={beli}
              >
                cart
              </button>
            </div> */}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container pt-4 mb-4">
      <h3 className="text-center">Our Items</h3>
      <hr className="hr mb-4" />
      <div className="row">{showData}</div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    beli
    // addToCart: (id) => {
    //   dispatch(addToCart(id));
    // },
  };
};

export default connect(null, mapDispatchToProps)(Test);

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Test = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios.get("https://api.juliaveronica.com/item/show").then((res) => {
//       console.log(res.data);
//       setData(res.data);
//     });
//   }, []);

//   const showData = data.map((data, id) => {
//     const URL = "http://3.136.102.205/";
//     console.log(data);
//     return (
//       <tr key={id}>
//         {/* <td>{data.id}</td> */}
//         <td>
//           <img
//             src={`${URL}${data.imageUrl}`}
//             alt=""
//             style={{ width: "100px" }}
//           />
//         </td>
//         <td>{data.name}</td>
//         <td>{data.price}</td>
//         <td>{data.description}</td>
//         <td>{data.quantity}</td>
//         <td>{data.category.name}</td>
//       </tr>
//     );
//   });
//   return (
//     <div>
//       <table
//         className="table table-dark table-striped table-hover justify-content-center"
//         style={{ width: "70%" }}
//       >
//         <thead>
//           <tr>
//             {/* <th scope="col">ID</th> */}
//             <th scope="col">Image</th>
//             <th scope="col">Name</th>
//             <th scope="col">Price</th>
//             <th scope="col">Description</th>
//             <th scope="col">quantity</th>
//             <th scope="col">categoryId</th>
//           </tr>
//         </thead>
//         <tbody>{showData}</tbody>
//       </table>
//     </div>
//   );
// };

// export default Test;
