import React, { Component } from 'react'
import config from '../../config.json'
import axios from 'axios'
import './VIPDashboard.css'
export class VIPDashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            slotId:'100',
            slotName:'VIP',
            fromDate: '',
            toDate:'',
            fromDateError:'',
            toDateError:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value }, () => {
            
        });
        
    }
    handleSubmit(e) {
        e.preventDefault()
                const { fromDate, toDate } = this.state
                
                const user = {
                    email: fromDate,
                    password: toDate
                };
                this.getData(user).then((response) => {
                    if (response.status === 200 && response.data.status === "SUCCESS") {
                        this.props.validateUser(true);
                        localStorage.setItem("userId",response.data.userId)
                        if(response.data.role=="vip"){
                            this.props.history.push({
                                pathname: '/vipdashboard',
                                search: '?query=dashboard',
                                //state:{data: response.data}
                            })
                        } else {
                            this.props.history.push({
                                pathname: '/regdashboard',
                                search: '?query=dashboard',
                                //state:{data: response.data}
                            })
                        }
                        
                    }
                })
       
    }

    getData(user) {
        return new Promise((resolve, reject) => {
            axios.post(`${config.url}/login`, user)
                .then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        });
        
    }
    componentDidMount(){
        console.log(localStorage.getItem('userId'))
        let userId= localStorage.getItem('userId')
        axios.get(`${config.url}/userslot/${userId}`)
            .then(res => {
                console.log("res inside component did mount get all day data", res)
                this.setState({
                    slotId: res.data.slotId,
                    slotName: res.data.slotName
                }, () => {
                    console.log("overall list after set state component did mount", this.state)
                });
            })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div class="column">
                        <div className="details">
                             <h4 style={{color: "orangered"}}>Welcome to HCL parking solution</h4>
                             <br></br>
                             <h6>  Your parking slot number: {this.state.slotId} </h6>
                            
                             <br></br><br></br>
                             
                            
                             Release parking lot From Date:  <input type="checkbox"  value="" id="fromdate" onChange={this.handleChange} />&nbsp;
                             To Date: <input type="date"   id="toDate" onChange={this.handleChange}/><br></br><br></br>
                            <button type="button" style={{ marginLeft: "1%" }} className="btn btn-primary" onClick={() => { this.props.history.push('/') }}>Submit</button>&nbsp;
                              
                        </div>
                        
                    </div>
                   
                </div>

            </div>
        )
    }
}

export default VIPDashboard
