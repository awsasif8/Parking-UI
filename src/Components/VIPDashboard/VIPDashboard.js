import React, { Component } from 'react'
import config from '../../config.json'
import axios from 'axios'
import './VIPDashboard.css'
import swal from 'sweetalert'
export class VIPDashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            slotId:3,
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
    validate(){
        
        return new Promise((resolve, reject)=>{
            let isValid=true;
            if(this.state.fromDate=== '' || this.state.toDate===''){
                isValid=false;
        
            }
            return resolve(isValid)
        })
    }
    handleSubmit(e) {
        e.preventDefault()
                const { fromDate, toDate } = this.state
                let userId=localStorage.getItem('userId')
                const user = {
                    fromDate: fromDate,
                    toDate: toDate,
                    userId: userId,
                    slotId: this.state.slotId
                };
                this.validate().then(res=>{
                    if(res){
                        this.getData(user).then((response) => {
                            console.log("resonse of slot release", response)
                            if(response.data.status==="SUCCESS"){
                             swal("Request for slot release submitted successfully")
                            } else if(response.status==="FAILURE" ){
                                swal(`Error in slot release ${response.data.message}`)
                            }
                            
                        }).catch(err=>{
                            swal(err.response.data.message)
                        })

                    }  else{
                        swal(`Please select the dates for which you want to release slot`)
                    } 

                })
            }
                
                    // if (response.status === 200 && response.data.status === "SUCCESS") {
                    // //         this.props.history.push({
                    // //             pathname: '/vipdashboard',
                    // //             search: '?query=dashboard',
                    // //             //state:{data: response.data}
                    // //         })
                    // //     } else {
                    // //         this.props.history.push({
                    // //             pathname: '/regdashboard',
                    // //             search: '?query=dashboard',
                    // //             //state:{data: response.data}
                    // //         })
                    // //     }
                        
                    // // })
    getData(user) {
        return new Promise((resolve, reject) => {
            axios.post(`${config.url}/releaseslot`, user)
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
                <button type="button" style={{ marginLeft: "90%" }} className="btn btn-primary" onClick={()=>{this.props.history.push('/logout')}}>Logout</button>&nbsp;
                    <div class="column">
                    <h4 style={{color: "orangered"}}>Do you want to help an employee by releasing a slot?</h4>
                        <div className="details">
                        
                             
                             <br></br>
                             <h6>  Your parking slot number: {this.state.slotId} </h6>
                            
                             <br></br><br></br>
                             
                            
                              Release parking lot From Date:  <input type="date"  id="fromDate" onChange={this.handleChange} />&nbsp;
                             To Date: <input type="date"   id="toDate" onChange={this.handleChange}/><br></br><br></br>
                            <button type="button" style={{ marginLeft: "1%" }} className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>&nbsp;
                              
                        </div>
                        
                    </div>
                   
                </div>

            </div>
        )
    }
}

export default VIPDashboard
