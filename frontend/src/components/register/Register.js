import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "./../actioncreators/auth";
import styled from "styled-components";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      phone: "",
      password: "",
    };
  }
  componentDidMount() {
    // if logged in and user navigates to register page, should redirect them to dashboard.
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
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
    const newUser = {
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
    };
    this.props.history.registerUser(newUser, this.props.history);
    console.log(newUser);
  };

  render() {
    const { errors } = this.state;
    return (
      <AppRegister>
        {/* form register */}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            {/* email */}
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              placeholder="email"
              id="email"
              size="25"
              type="email"
            />
          </div>
          {/* phone */}
          <div className="form-group">
            <input
              onChange={this.onChange}
              value={this.state.phone}
              error={errors.phone}
              placeholder="phone"
              id="phone"
              size="25"
              type="number"
            />
          </div>
          {/* password */}
          <div className="form-group">
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              placeholder="password"
              id="password"
              size="25"
              type="password"
            />
          </div>
          {/* button signup */}
          <div style={{ margin: "20px" }} className="text-center pt-4">
            <button type="submit" className="btn btn-outline-dark">
              SignUp
            </button>
          </div>
        </form>
      </AppRegister>
    );
  }
}
const AppRegister = styled.form`
  margin-top: 80px;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors });
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
