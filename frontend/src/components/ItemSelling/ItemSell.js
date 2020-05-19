import React from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const Penjualan = () => {
  return (
    <div className="wrapper mt-2 pt-3">
      <Formik
        initialValues={{
          name: "",
          price: "",
          description: "",
          quantity: "",
          category: "",
          image: "",
        }}
        validate={(values) => {
          let errors = {};
          if (values.name === "") {
            errors.name = "Name is required";
          }
          if (values.price === "") {
            errors.price = "Price is required";
          }
          if (values.description === "") {
            errors.description = "Description is required";
          }
          if (values.quantity === "") {
            errors.quantity = "Quantity is required";
          }
          if (values.category === "") {
            errors.category = "Category is required";
          }
          if (values.image === "") {
            errors.image = "Image is required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios.post("http://localhost:8000/item/create", {
            values,
          });
          alert("Form is Validated!");
          setSubmitting(false);
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <div className="container">
              <div className="row justify-content-md-center">
                <div class="col-md-4 ">
                  <div class="card text-center pt-2">
                    <h1
                      className="text-center text-primary"
                      style={{ fontSize: "25px" }}
                    >
                      Sells Your Items
                    </h1>
                    <div class="card-body">
                      <Field
                        placeholder="Name"
                        type="name"
                        name="name"
                        className={`${errors.name && touched.name}`}
                      />
                      <p />
                      <Field
                        placeholder="Price"
                        type="number"
                        name="price"
                        className={`${errors.price && touched.price}`}
                      />
                      <p />
                      <Field
                        placeholder="Description"
                        type="name"
                        name="description"
                        className={`${
                          errors.description && touched.description
                        }`}
                      />
                      <p />
                      <Field
                        placeholder="Quantity"
                        type="number"
                        name="quantity"
                        className={`${errors.quantity && touched.quantity}`}
                      />
                      <p />
                      <Field
                        placeholder="Category"
                        type="number"
                        name="name"
                        className={`${errors.category && touched.category}`}
                      />
                      <p />
                      <Field
                        placeholder="Image"
                        type="name"
                        name="name"
                        className={`${errors.image && touched.image}`}
                      />
                      <p />
                      <button
                        type="submit"
                        className="btn btn-outline-primary justify-content-center"
                      >
                        Submit
                      </button>
                      {isSubmitting}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Penjualan;

{/* <div className="container mt-4 mb-4 content">
<h1>Sell Your Item Here</h1>
<form className="mb-4">
  <div class="form-group">
    <label for="email">Item Name</label>
    <input type="email" class="form-control" id="itemName" />
  </div>
  <div class="form-group">
    <label for="password">Item Price</label>
    <input type="number" class="form-control" id="price" placeholder="" />
  </div>
  <div class="form-group">
    <label for="email">Category</label>
    <input
      type="email"
      class="form-control"
      id="c"
      placeholder="List Category here"
    />
  </div>
  <button type="submit" class="btn btn-primary">
    Login
  </button>
</form>
</div> */}
