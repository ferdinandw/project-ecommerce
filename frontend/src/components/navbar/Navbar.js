import React from 'react'
import {Link} from 'react-router-dom'
import {FaShoppingCart, FaDollarSign} from "react-icons/fa";

const Navbar2 = () => {
    return(
        <nav className="navbar">
            <Link  className="navbar-brand" to="/">Shop Name</Link>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Category" aria-label="Search"/>
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div>
                <button className="mr-4">
                    <Link to="/cart"><FaShoppingCart/></Link>
                </button>
                <button className="mr-4">
                    <Link to="/seller"><FaDollarSign/></Link>
                </button>
                <button className="btn btn-outline-dark">
                    <Link to="/login">Login</Link>
                </button>
            </div>
            
        </nav>
    )
}

export default Navbar2