import React from "react";
// import { Formik, Field, Form } from "formik";
// import axios from "axios";

const Penjualan = () => {
  return (
    <div className="wrapper mt-2 pt-3 mb-2 d-flex justify-content-center">
      <div className="card" style={{ width: "30rem" }}>
        <h1 className="text-center">Create Items</h1>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Example select</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Penjualan;

// {
//   /* <div className="container mt-4 mb-4 content">
// <h1>Sell Your Item Here</h1>
// <form className="mb-4">
//   <div class="form-group">
//     <label for="email">Item Name</label>
//     <input type="email" class="form-control" id="itemName" />
//   </div>
//   <div class="form-group">
//     <label for="password">Item Price</label>
//     <input type="number" class="form-control" id="price" placeholder="" />
//   </div>
//   <div class="form-group">
//     <label for="email">Category</label>
//     <input
//       type="email"
//       class="form-control"
//       id="c"
//       placeholder="List Category here"
//     />
//   </div>
//   <button type="submit" class="btn btn-primary">
//     Login
//   </button>
// </form>
// </div> */
// }
