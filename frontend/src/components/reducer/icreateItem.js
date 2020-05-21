import React, { useState, useEffect } from "react";
import axios from "axios";
import Detail from "./../detail/detail";
import { addToCart } from "./../actioncreators/cart";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import "./item.css";

const Item = (props) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("")
        console.log(res.data);
        setData(res.data);
    });
    }, []);
    const handleClick = (id) => {
        props.addToCart(id);
    };

    const showData = data.map((data, id) => {
        const URL = "";
        return (
            <div className="col-md-3 col-sm-12 my-2 ">
                <div className="card" key={id}>
                    <img src={`${URL}${data.imageUrl}`}
                    alt = {data.name}
                    className="card-img-top" />
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

export default connect(null,mapDispatchToProps)(Item);