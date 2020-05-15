import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart, FaDollarSign } from "react-icons/fa";

const Navbar2 = () => {
  return (
    <NavWrapper className="navbar navbar-expend-sm navbar-dark px-sm-5">
      <Link className="navbar-brand" to="/">
        Shop Name
      </Link>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Category"
          aria-label="Search"
        />
        <ButtonContainer class="btn btn-secondary my-2 my-sm-0" type="submit">
          <i class="fas fa-search"></i>
        </ButtonContainer>
      </form>
      <div>
        <ButtonContainer className="mr-4">
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
        </ButtonContainer>
        <ButtonContainer className="mr-4">
          <Link to="/seller">
            <FaDollarSign />
          </Link>
        </ButtonContainer>
        <button className="btn btn-outline-dark">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background: #ffa41b;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${(prop) => (prop.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(prop) =>
      prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;

export default Navbar2;
