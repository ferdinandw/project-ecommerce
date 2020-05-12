import React from 'react'

const Home = () => {
    // const itemList = data.map((item, index) => {
    //     const {name,price,description,quantity,imageUrl,categoryId} = item;
    //     return(
    //         <div className="col-md-3">
    //                 <div class="card mb-4">
    //                     <img src={item.imageUrl} class="card-img-top" alt="..."/>
    //                     <div class="card-body">
    //                         <h4 className="card-title">{item.name}</h4>
    //                         <h5 className="card-subtitle mb-2">{item.price}</h5>
    //                         <h6 className="card-subtitle mb-2">Stock : {item.quantity}</h6>
    //                         <p class="card-text">{item.description}</p>
    //                         <a href="#" class="card-link">Beli Sekarang</a>
    //                         <a href="#" class="card-link">Add to Cart</a>
    //                     </div>
    //                 </div>
    //          </div>
    //     )
    // });
    return(
            <div className="container-fluid content">
            <h4 className="pb-5">Item List</h4>
                <div className="row">
                    {/* {itemList} */}
                    <div className="col-md-3">
                        <div class="card mb-4">
                            <img src={require("../img/1.png")} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h4 className="card-title">Teman Gak Guna</h4>
                                <h5 className="card-subtitle mb-2">Rp 20.000</h5>
                                <h6 className="card-subtitle mb-2">Stock : Banyak</h6>
                                <p class="card-text">Di jual teman gak guna karena tidak berguna</p>
                                <a href="/" class="card-link">Buy Now</a>
                                <a href="/" class="card-link">Add To Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default Home