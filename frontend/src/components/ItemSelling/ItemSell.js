import React from 'react'

const Penjualan = () => {
    return(
        <div className="container mt-4 mb-4 content">
            <h1>Sell Your Item Here</h1>
            <form className="mb-4">
                <div class="form-group">
                    <label for="email">Item Name</label>
                    <input type="email" class="form-control" id="itemName"/>
                </div>
                <div class="form-group">
                    <label for="password">Item Price</label>
                    <span>
                        Rp 
                        <input type="number" class="form-control" id="price" placeholder=""/>
                    </span>
                </div>
                <div class="form-group">
                    <label for="email">Category</label>
                    <input type="email" class="form-control" id="c" placeholder="List Category here"/>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Penjualan