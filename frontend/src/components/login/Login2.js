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
    return (
        <div className="container mt-4" >
            <div className="card">
                <div className="row">
                <div className="col-md-6">
                    <img
                    src="./logo512.png"
                    alt="Gambar 1"
                    style={{ marginTop: "", width: "100%", height: "250px" }}
                />
                </div>
                <div className="col-md-6">
                    <h1 className="text-center mb-3">Login Form</h1>
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
                <div
                //   style={{
                //     marginLeft: "380px",
                //     marginBottom: "0",
                //     paddingTop: "0",
                //   }}
                >
                  <Form>
                    <div className="container">
                      <div className="justify-content-md-center">
                          <div
                            class="card"
                            style={{
                              backgroundColor: "white",
                              boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
                            }}
                          >
                            <div
                              class="card-body "
                            //   style={{
                            //     width: "60rem",
                            //   }}
                            >
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
                  </Form>
                </div>
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