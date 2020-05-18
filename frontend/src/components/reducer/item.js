import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.juliaveronica.com/item/show").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  const showData = data.map((data, id) => {
    return (
      <tr key={id}>
        {/* <td>{data.id}</td> */}
        <td>
          <img src={data.image} alt="" />
        </td>
        <td>{data.name}</td>
        <td>{data.price}</td>
        <td>{data.description}</td>
        <td>{data.quantity}</td>
        <td>{data.category.name}</td>
      </tr>
    );
  });
  return (
    <div>
      <table
        className="table table-dark table-striped table-hover justify-content-center"
        style={{ width: "70%" }}
      >
        <thead>
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">quantity</th>
            <th scope="col">categoryId</th>
          </tr>
        </thead>
        <tbody>{showData}</tbody>
      </table>
    </div>
  );
};

export default Test;
