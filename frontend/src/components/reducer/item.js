import React, { useState, useEffect } from "react";
import axios from "axios";
import Detail from "./../detail/detail";
import { addToCart } from "./../actioncreators/cart";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import "./item.css";
const Test = (props) => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.juliaveronica.com/item/show").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  const handleClick = (id) => {
    props.addToCart(id);
  };
  // const testimage = "https://i.imgur.com/tq4h23x.jpg";

  const showData = data.map((data, id) => {
    const URL = "http://3.136.102.205/";
    return (
      <div className="col-md-3 col-sm-12 my-2 ">
        <div className="card" key={id}>
          <img
            src={`${URL}${data.imageUrl}`}
            alt={data.name}
            className="card-img-top"
          />
          <h4 className="card-title">{data.name}</h4>
          <div className="card-content">
            <p>{data.description}</p>
            <p>
              <b>Price: Rp {data.price}</b>
            </p>
          </div>
          <br />
          <Detail />
          <button to="/" className="btn btn-outline-dark" onClick={handleClick}>
            <Link to="/cart">Add Item</Link>
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="container pt-4">
      <h3 className="text-center">Our Items</h3>
      <hr className="hr mb-4" />
      <div className="row">{showData}</div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(null,mapDispatchToProps)(Test);

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
