import React, { Component } from 'react'
import './RegDashboard.css'
import axios from 'axios'
import config from '../../config.json'
import swal from 'sweetalert'
import { exportDefaultSpecifier } from '@babel/types';

export class RegDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {

            // slots: [
            //     {
            //         slotNo1: 1,
            //         slotNo2: 2,
            //         slotNo3: 3,
            //         slotNo4: 4,
            //         slotNo5: 5
            //     },
            //     {
            //         slotNo1: 6,
            //         slotNo2: 7,
            //         slotNo3: 8,
            //         slotNo4: 9,
            //         slotNo5: 10
            //     },
            //     {
            //         slotNo1: 11,
            //         slotNo2: 12,
            //         slotNo3: 13,
            //         slotNo4: 14,
            //         slotNo5: 15
            //     },
            //     {
            //         slotNo1: 16,
            //         slotNo2: 17,
            //         slotNo3: 18,
            //         slotNo4: 19,
            //         slotNo5: 20
            //     }
            // ],
            // availableSlots: [
            //     {
            //         slotId: 1,
            //         slotName: 'A1'
            //     },
            //     {
            //         slotId: 2,
            //         slotName: 'A2'
            //     },
            //     {
            //         slotId: 3,
            //         slotName: 'A3'
            //     },
            //     {
            //         slotId: 3,
            //         slotName: 'A4'
            //     },
            //     {
            //         slotId: 4,
            //         slotName: 'A5'
            //     },
            //     {
            //         slotId: 6,
            //         slotName: 'B1'
            //     },
            //     {
            //         slotId: 7,
            //         slotName: 'B2'
            //     },
            //     {
            //         slotId: 8,
            //         slotName: 'B3'
            //     },
            //     {
            //         slotId: 9,
            //         slotName: 'B4'
            //     },
            //     {
            //         slotId: 9,
            //         slotName: 'B5'
            //     }



            // ],
            availableSlots:[],
            selectedColor: "green",
            bookedSlotId:'',
            bookedSlotName:'',
            slotSelected: false
        }
        this.handleClickPark=this.handleClickPark.bind(this)
        this.handleBook = this.handleBook.bind(this);
    }
    handleClickPark(e){
        console.log(`Id: ${e.target.id}  Value: ${e.target.value}`)
        this.setState({
            bookedSlot: e.target.value,
            bookedSlotName: e.target.id,
            slotSelected: true
        })
    }
    componentDidMount(){
        console.log(localStorage.getItem('userId'))
        let userId= localStorage.getItem('userId')
        axios.get(`${config.url}/slots/3`)
            .then(res => {
                console.log("res inside component did mount get all day data", res)
                this.setState({
                    availableSlots: res.data.data
                    
                }, () => {
                    console.log("overall list after set state component did mount", this.state)
                });
            }).catch(err=>{
                swal(`Error in getting available slots, ${err}`)
            })
    }
    handleBook(e){
        let book={
            userId:localStorage.getItem('userId'),
            slotId: this.state.bookedSlotId
        }
        axios.post(`${config.url}/book`, book)
            .then(res => {
                console.log("res inside component did mount get all day data", res)
                this.setState({
                    slotId: res.data.slotId,
                    slotName: res.data.slotName
                }, () => {
                    console.log("overall list after set state component did mount", this.state)
                });
            }).catch(err=>{
                console.log(err)
                swal(err.response.data.message)
            })
    }
    render() {
        let slotList = this.state.availableSlots.map((item, i) => {
            if(item.slotName.indexOf('A')!==-1){
                console.log("A")
                return (
               
                    <li className="row row--1">
                        <ol className="parks" style={{fontWeight: "bold"}} type="A">
                           
                                <div  id={item.slotName} onClick={this.handleClickPark} >{item.slotName}</div>
                           
                        </ol>
                    </li>
                )
               

            } else if(item.slotName.indexOf('B')!==-1){
                console.log("B")
                return (
               
                    <li className="row row--2">
                        <ol className="parks" type="A">
                            <li className="park">
                                <input type="checkbox" id={item.slotName} value={item.slotId} onClick={this.handleClickPark}/>
                                <label htmlFor={item.slotName}>{item.slotName}</label>
                            </li>
                        </ol>
                    </li>
                )

            }
            
        }, this);
        return (
            <div>
                {/* <table background={road} className="table table-bordered" style={{  color: "yellow", width: "50%", marginLeft: "20%", marginTop:"5%"  }}>
                    <tbody>
                        {
                            this.state.slots.map((each, index) => (
                                <tr >
                                    <td style={{cursor: "pointer", border: "8px white solid", backgroundColor: "red"}} key={each.slotNo1} onClick={(e)=>{this.clickCellHandler(e,each.slotNo1)}}> {each.slotNo1}</td>
                                    <td style={{cursor: "pointer", border: "8px white solid"}} key={each.slotNo2} onClick={(e)=>{this.clickCellHandler(e,each.slotNo2)}}> {each.slotNo2}</td>
                                    <td style={{cursor: "pointer", border: "8px white solid" }} key={each.slotNo3} onClick={(e)=>{this.clickCellHandler(e,each.slotNo3)}}> {each.slotNo3}</td>
                                    <td style={{cursor: "pointer", border: "8px white solid"}} key={each.slotNo4} onClick={(e)=>{this.clickCellHandler(e,each.slotNo4)}}> {each.slotNo4}</td>
                                    <td style={{cursor: "pointer", border: "8px white solid"}} key={each.slotNo5} onClick={(e)=>{this.clickCellHandler(e,each.slotNo5)}}   > {each.slotNo5}</td>   
                                </tr>
                            ))
                        }

                    </tbody>
                </table> */}

                {/* <button type="submit" className="btn btn-primary" style={{backgroundColor:"orangered"}} onClick={()=>{localStorage.removeItem('userId')}}></button> */}
                <button type="button" style={{ marginLeft: "90%" }} className="btn btn-primary" onClick={()=>{this.props.history.push('/logout')}}>Logout</button>&nbsp;
                <h4 style={{color: "orangered"}}>Select the slot to book</h4>
                <br></br>
                
                {
                    this.state.slotSelected?(
                        <div>
                            <h4>You have Selected the slot {this.state.bookedSlotName}.Please proceed to book</h4>
                            <br></br>
                            <button type="button" style={{ marginLeft: "5%" }} className="btn btn-primary" onClick={this.handleBook}>Book</button>&nbsp;
                        </div>

                    ):(
                        <div className="car-park" style={{ marginLeft: "10%" }}>
                        <ol style={{ marginLeft: "30%" }} className="cabin fuselage">
                        {slotList}
                           
                        </ol>
    
                    </div>
                    )
                }
               
                {/* <ul id="menugreen">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul id="menured">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}

            </div>
        )
    }

}

export default RegDashboard
