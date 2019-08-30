import React, { Component } from 'react'
import axios from 'axios'
import { withTranslation } from 'react-i18next';
import './Login.css'
import config from '../../config.json'
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert'
// import validate from '../../Utils/Validator'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            isValid: false,
            alert: null
        }
        console.log("props of login constructor", this.props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value }, () => {
            
        });
        
    }

    handleSubmit(e) {
        e.preventDefault()
        
        this.validate().then((res) => {
            console.log("res", res)
            if (res) {
                const { email, password } = this.state
                const user = {
                    email: email,
                    password: password
                };
                
                this.getData(user).then((response) => {
                    console.log("response of login", response)
                    if (response.status === 200 && response.data.status==="SUCCESS") {
                        // this.props.validateUser(true);
                        localStorage.setItem("userId",response.data.userId)

                        if(response.data.role=="vip" || response.data.role=="VIP"){
                            this.props.history.push({
                                pathname: '/vipdashboard',
                                search: '?query=dashboard',
                                //state:{data: response.data}
                            })
                        } else if(response.data.role=="reg"|| response.data.role=="REG  "){
                            this.props.history.push({
                                pathname: '/regdashboard',
                                search: '?query=dashboard',
                                //state:{data: response.data}
                            })
                        }
                        
                    } else {
                        swal(`Error in login : ${response.data.message}`)
                    }
                })
            }
        });
    }

    getData(user) {
        return new Promise((resolve, reject) => {
            axios.post(`${config.url}/user/login`, user)
                .then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        });
        
    }
    validate() {
        console.log("Inside validate")
        let isValid = true;
        const errors = {
            emailError: '',
            passwordError: ''
        }

        if (this.state.email.indexOf('@') !== -1) {
            if (this.state.password.length > 4) {
                isValid = true;
            } else {
                isValid = false;
                errors.passwordError = 'Password should be more than 4 characters'
            }
        } else {
            isValid = false;
            errors.emailError = 'Email Id should be in proper format'
        }
        if(this.state.email===''|| this.state.password ===''){
            isValid = false;
            errors.emailError="Email is mandatory field"
            errors.passwordError="Password is mandatory field"
        }

        this.setState({
            ...this.state,
            ...errors
        })
        console.log("isValid inside validate", isValid)
        return Promise.resolve(isValid);

    }
    render() {
       let {t} = this.props
        return (
            <div className="back">
                <div className="container">
                     <h2 style={{marginLeft: "-5%", marginTop: "1%",color: "orangered"}}>Login</h2>
                <form style={{marginLeft: '30%', marginTop: "5%", textAlign: "left"}} >
                  <span className="text-danger " ><small>{this.state.emailError}</small></span>
                       <span className="text-danger " ><small>{this.state.passwordError}</small></span>
                       <br></br>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label " >Email</label>
                        <div className="col-sm-4" >
                            <input type="email" className="form-control" id="email" onChange={this.handleChange} placeholder="Enter Email" />
                        </div>
                    </div>
                   
                   
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label " >Password</label>
                        <div className="col-sm-4  ">
                            <input type="password" className="form-control" id="password" onChange={this.handleChange} placeholder="Enter Password" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-4 offset-sm-2">
                            <button type="submit" className="btn btn-primary"  onClick={this.handleSubmit}>Login</button>
                        </div>
                    </div>
                
                </form>
               
            </div>
            </div>
        )
    }
}


export default withRouter(Login);