import React from 'react'

const Checkout = () => {
    return(
        <div className="container mt-4 pt-4">
            <h2 className="my-5 h2 text-center">Checkout Form</h2>
            <div className="row">
                <div className="col-md-8 mb-4">
                    <div className="card">
                        <form className="card-body">
                            <div className="row">
                                <div className="col-md-6 mb-2">
                                    <label for="userName">Username</label>
                                    <input type="text" className="form-control" id="userName"/>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label for="phone">Phone Number</label>
                                    <input type="text" className="form-control" id="userName"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout