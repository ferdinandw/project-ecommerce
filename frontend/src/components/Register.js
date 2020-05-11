import React from 'react'
import {Link} from 'react-router-dom'
const Register = () => {
    return(
        <div>
            <h1>Login</h1>
            <div className="container-fluid">
                <div className="row test">
                <div className="col-md-6">
                <img src={require("./img/mandiri.png")} alt="Gambar 1" />
                </div>
                <div className="col-md-6">
                    <form className="mb-4">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email Address</label>
                                <input type="email" class="form-control" id="emailRegis" placeholder="Please Enter a Valid Email Address"/>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Phone Number</label>
                                <input type="number" class="form-control" id="phone" placeholder="Please Enter a valid phone number"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Password</label>
                            <input type="password" class="form-control" id="passwordRegis" placeholder="Password Length must be 6 or more"/>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Confirm Password</label>
                            <input type="password" class="form-control" id="passwordConfirm" placeholder="Please type your password again"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                    </form>
                    <h6>
                        Already have an account ?
                        <Link to="/login"> Login Here</Link>
                    </h6>
                </div>
                </div>
            </div>
        </div>
    )
}


export default Register