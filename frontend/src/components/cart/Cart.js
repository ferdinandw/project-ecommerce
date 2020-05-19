import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Cart extends Component {
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <li className="collection-item avatar" key={item.id}>
            {/* image */}
            <div className="item-img">
              <img src={item.img} alt={item.img} className="" />
            </div>
            {/* name */}
            <div className="item-desc">
              <span className="title">{item.name}</span>
              {/* description */}
              <p>{item.description}</p>
              {/* price */}
              <p>
                <b>Price: {item.price}$</b>
              </p>
              {/* quantity */}
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              {/* item get category by id */}
              <p>
                <b>Category: {item.categoryId}</b>
              </p>
              <div className="add-remove">
                <button>
                  <Link to="/cart">Add More</Link>
                </button>
                <button>
                  <Link to="/cart">Reduce</Link>
                </button>
              </div>
              <button className="btn btn-danger">Remove</button>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <div className="container content">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.addedItems,
  };
};

export default connect(mapStateToProps)(Cart);
