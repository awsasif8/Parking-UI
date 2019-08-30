    import React, { Component } from 'react'
import './Logout.css'
export class Logout extends Component {
    render() {
        return (
            <div>
                  <button type="button" style={{ marginLeft: "90%" }} className="btn btn-primary" onClick={()=>{this.props.history.push('/login')}}>Login</button>&nbsp;
                <h3 style={{'margin-top': '10%'}}>Thank you for using HCL parking system.You have successfully loggedout</h3>
               
            </div>
        )
    }
}

export default Logout
