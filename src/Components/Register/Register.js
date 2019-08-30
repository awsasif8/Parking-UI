import React, { Component } from 'react'
import axios from 'axios'
import { withTranslation } from 'react-i18next';
import swal from 'sweetalert'
import config from '../../config.json'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            name:'',
            nameError:'',
            sapId:'',
            sapIdError:'',
            exp:'',
            expError:'',
            hclExp:'',
            hclExpError:'',
            loading: false,
            isValid: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value }, () => {
        });

    }
    handleSubmit(e) {
        e.preventDefault()
        this.validate().then(res=>{
            console.log("isvalid inside validate submit", res)
            if (res) {
                const user = {
                    email: this.state.email,
                    name: this.state.name,
                    sapId: this.state.sapId,
                    password: this.state.password,
                    totalexp: this.state.exp,
                    hclexp: this.state.hclExp
                };
                console.log(user)
                this.setState({ loading: true }, () => {
                    console.log(this.state.loading)
                    axios.post(`${config.url}/register`, user)
                    .then(res => {
                            console.log("register response", res)
                        if (res.status === 200 && res.data.status==="SUCCESS") {
                            this.setState({loading: false})
                            swal("Registration is successful. You can now login with registered email Id.")
                            this.props.history.push({
                                pathname: '/login'
                            })
                        } else {
                            swal("Error in registration", res.data.message)
                            this.setState({loading: false})
                        }
                    }).catch((err) => {
                        swal("Error in registration", err)
                    })
                  });
                
    
            }
        })
       
    }
    validate() {
        return new Promise((resolve, reject) => {
            console.log("Inside validate")
            let isValid = true;
            const errors = {
                emailError: '',
                sapIdError: '',
                passwordError: '',
                nameError: '',
                expError: '',
                hclExpError:''
            }
            console.log(this.state)
            if(this.state.email ===''|| this.state.exp===''|| this.state.hclExp===''||this.state.password===''){
                console.log("is valid is false")
                isValid = false;
                errors.expError = "Email, total experience , hcl experience and password are mandatory fields"
            } else {
                if (this.state.email.indexOf('@') !== -1) {
                    console.log("isvalid is true")
                } else {
                    console.log("is valid is false")
                    isValid = false;
                    errors.emailError = "Email should be in proper format and it is mandatory"
                }
            }

            this.setState({
                ...this.state,
                ...errors
            })
            return resolve(isValid)

        })

    }
    render() {
        const { loading } = this.state;
        return (
            
            <div >
                {loading ?  <LoadingSpinner /> : (<div>
                <h2 style={{ marginLeft: "-5%", color: "orangered" }}>Register</h2>
                <form style={{ marginLeft: '30%', marginTop: "1%", textAlign: "left" }} >
                       <span className="text-danger " ><small>{this.state.emailError}</small></span>
                       <span className="text-danger " ><small>{this.state.expError}</small></span>
                       <span className="text-danger " ><small>{this.state.hclExpError}</small></span>
                       <br></br>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label" >Name</label>
                        <div className="col-sm-4 ">
                            <input onChange={this.handleChange} type="text" className="form-control" id="name" placeholder="Enter Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label " >Email</label>
                        <div className="col-sm-4" >
                            <input  onChange={this.handleChange} type="email" className="form-control" id="email" placeholder="Enter Email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="sapId" className="col-sm-2 col-form-label " >Sap ID</label>
                        <div className="col-sm-4" >
                            <input onChange={this.handleChange} type="sapId" className="form-control" id="sapId" placeholder="Enter SAP Id" />
                        </div>
                    </div>
                    <div className="form-group row">
                           <br></br>
                           <label htmlFor="exp" className="col-sm-2 col-form-label labelal">Total Experience </label>
                           <div className="col-sm-4 " >
                               <input onChange={this.handleChange} type="text" className="form-control" id="exp" placeholder="Enter total experience" />    
                           </div>
                       </div>
                       <div className="form-group row">
                           <br></br>
                           <label htmlFor="hclExp" className="col-sm-2 col-form-label labelal">HCL Experience</label>
                           <div className="col-sm-4 " >
                           <input  onChange={this.handleChange} type="text" className="form-control" id="hclExp" placeholder="Enter HCL experience" />
                           </div>
                       </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label " >Password</label>
                        <div className="col-sm-4  ">
                            <input onChange={this.handleChange} type="password" className="form-control" id="password" placeholder="Enter Password" />
                        </div>
                    </div>
                   
                    <div className="form-group row">
                        <div className="col-sm-4 offset-sm-2">
                            <button type="submit" className="btn btn-primary"  onClick={this.handleSubmit}>Register</button>
                        </div>
                    </div>

                </form>
                </div>)
                }
            </div>
        )
    }
}

export default Register
