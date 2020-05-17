import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "./../actioncreators/auth";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import "./style.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
    console.log(userData);
  };
  render() {
    // const { errors } = this.state;
    return (
      <div className=" mt-4">
        <br />
        <div className="card mt-5">
          <h1 className="text-center">Login Form</h1>
          <br />
          <div className="row">
            <div className="col-md-4" style={{ marginLeft: "50px" }}>
              <img src="../img/3.png" alt="Gambar 1" />
            </div>
            <div
              style={{
                marginLeft: "380px",
                marginBottom: "30px",
                marginTop: "0",
                paddingTop: "0",
              }}
            >
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validate={(values) => {
                  let errors = {};
                  if (values.email === "") {
                    errors.email = "Name is required";
                  }
                  if (values.password === "") {
                    errors.password = "Born is requird";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  axios.post("https://api.juliaveronica.com/users/login", {
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
                          <div class="card">
                            <div class="card-body " style={{ width: "60rem" }}>
                              <Field
                                placeholder="email"
                                type="email"
                                name="email"
                                className={`${errors.email && touched.email}`}
                              />
                              <p />
                              <Field
                                placeholder="password"
                                type="password"
                                name="password"
                                className={`${
                                  errors.password && touched.password
                                }`}
                              />
                              <p />
                              <button
                                type="submit"
                                className="btn btn-outline-primary"
                              >
                                Login
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
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors });
export default connect(mapStateToProps, { loginUser })(withRouter(Login));
