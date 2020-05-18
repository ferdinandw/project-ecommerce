import React, { useState, useEffect } from "react";
import axios from "axios";
import Detail from "./../detail/detail";
const Test = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.juliaveronica.com/item/show").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  const testimage = "https://i.imgur.com/tq4h23x.jpg"


  const showData = data.map((data, id) => {
    return (
      <div className="col-md-4 col-sm-12 my-2 mt-5 pt-2">
        <div className="card" key={id}>
          <img src={testimage} alt={data.name} className="card-img-top" />
          <h4 className="card-title" style={{ textAlign: "center" }}>
            {data.name}
          </h4>
          <div className="card-content">
            <p>{data.description}</p>
            <p>
              <b>Price: Rp {data.price}</b>
            </p>
          </div>
          <br />
          <Detail />
          {/* <button to="/" className="btn btn-outline-dark" onClick={handleClick}>
            <Link to="/cart">Add Item</Link>
          </button> */}
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <div className="row">{showData}</div>
    </div>
  );
};

export default Test;
