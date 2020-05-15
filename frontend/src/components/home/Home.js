// import React from 'react'
// import Detail from './../detail/detail'

// const Home = () => {
//     // const itemList = data.map((item, index) => {
//     //     const {name,price,description,quantity,imageUrl,categoryId} = item;
//     //     return(
//     //         <div className="col-md-3">
//     //                 <div class="card mb-4">
//     //                     <img src={item.imageUrl} class="card-img-top" alt="..."/>
//     //                     <div class="card-body">
//     //                         <h4 className="card-title">{item.name}</h4>
//     //                         <h5 className="card-subtitle mb-2">{item.price}</h5>
//     //                         <h6 className="card-subtitle mb-2">Stock : {item.quantity}</h6>
//     //                         <p class="card-text">{item.description}</p>
//     //                         <Detail/>
//     //                          <div className="pt-4">
//     //                          <a href="/" class="card-link">Buy Now</a>
//     //                          <a href="/" class="card-link">Add To Cart</a>
//     //                          </div>
//     //                     </div>
//     //                 </div>
//     //          </div>
//     //     )
//     // });

//     return(
//             <div className="container-fluid content">
//             <h4 className="pb-5">Item List</h4>
//                 <div className="row">
//                     {/* {itemList} */}
//                     <div className="col-md-3">
//                         <div class="card mb-4">
//                             <img src={require("../img/1.png")} class="card-img-top" alt="..."/>
//                             <div class="card-body">
//                                 <h4 className="card-title">Ferdinand</h4>
//                                 <h5 className="card-subtitle mb-2">Rp 20.000</h5>
//                                 <h6 className="card-subtitle mb-2">Stock : Banyak</h6>
//                                 <p class="card-text">Di jual teman gak guna karena tidak berguna</p>
//                                 <Detail/>
//                                 <div className="pt-4">
//                                 <a href="/" class="card-link">Buy Now</a>
//                                 <a href="/" class="card-link">Add To Cart</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     )
// }

// export default Home

import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./../actioncreators/cart";
import { Link } from "react-router-dom";
import Detail from "./../detail/detail";


class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="row">
          <div className="col my-2 mt-5 pt-2 pl-0 pr-0 md-3 sm-12">
            <div className="card" style={{ width: "18rem" }} key={item.id}>
              {" "}
              <div className="card-image">
                <img src={item.img} alt={item.title} className="card-img-top" />
                <span className="card-title" style={{ textAlign: "center" }}>
                  {item.title}
                </span>
              </div>
              <div className="card-content">
                <p>{item.desc}</p>
                <p>
                  <b>Price: {item.price}$</b>
                </p>
              </div>
              <br />
              <Detail />
              <button
                to="/"
                className="btn btn-outline-dark"
                onClick={() => {
                  this.handleClick(item.id);
                }}
              >
                <Link to="/cart">Add Item</Link>
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h3 className="center">Our items</h3>
        <div className="box">{itemList}</div>
      </div>
    );

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }

  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
