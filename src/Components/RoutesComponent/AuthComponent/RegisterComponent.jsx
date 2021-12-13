import React, { Component, Fragment } from 'react';
class RegisterComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
                <div>
                <h1 className="my-3">Register</h1>
                <div className="card col-md-4 mx-auto">
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="">UserName</label>
                                <input type="text"  className="form-control" name="username" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Gmail</label>
                                <input type="text"  className="form-control" name="gmail" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="text"  className="form-control" name="password" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Conform-Poassword</label>
                                <input type="text"  className="form-control" name="conPassword" required/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success  btn-block my-4">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </Fragment>
        )
    }
}
export default RegisterComponent;