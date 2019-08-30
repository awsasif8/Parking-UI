import React, { Component } from 'react'
import road from '../../Assets/Images/road.jfif'
import './Table.css'
export class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slots: [
                {
                    slotNo1: 1,
                    slotNo2: 2,
                    slotNo3: 3,
                    slotNo4: 4,
                    slotNo5: 5
                },
                {
                    slotNo1: 6,
                    slotNo2: 7,
                    slotNo3: 8,
                    slotNo4: 9,
                    slotNo5: 10
                },
                {
                    slotNo1: 11,
                    slotNo2: 12,
                    slotNo3: 13,
                    slotNo4: 14,
                    slotNo5: 15
                },
                {
                    slotNo1: 16,
                    slotNo2: 17,
                    slotNo3: 18,
                    slotNo4: 19,
                    slotNo5: 20
                }
            ],
            availableSlots: [
                {
                    id: 3,
                    slotNo: 3
                },
                {
                    id: 4,
                    slotNo: 4
                }

            ],
            selectedColor: "green"
        }
    }
    render() {
        return (
            <div className="container">
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

<div className="car-park">
  <div className="exit exit--front fuselage">
    
  </div>
  <ol className="cabin fuselage">
    <li className="row row--1">
      <ol className="parks" type="A">
        <li className="park">
          <input type="checkbox" id="1A" />
          <label for="1A">1A</label>
        </li>
        <li className="park">
          <input type="checkbox" id="1B" />
          <label for="1B">1B</label>
        </li>
        <li className="park">
          <input type="checkbox" id="1C" />
          <label for="1C">1C</label>
        </li>
        <li className="park">
          <input type="checkbox" disabled id="1D" />
          <label for="1D">Occupied</label>
        </li>
      </ol>
    </li>
    <li className="row row--2">
      <ol className="parks" type="A">
        <li className="park">
          <input type="checkbox" id="2A" />
          <label for="2A">2A</label>
        </li>
        <li className="park">
          <input type="checkbox" id="2B" />
          <label for="2B">2B</label>
        </li>
        <li className="park">
          <input type="checkbox" id="2C" />
          <label for="2C">2C</label>
        </li>
        <li className="park">
          <input type="checkbox" id="2D" />
          <label for="2D">2D</label>
        </li>
      </ol>
    </li>
    <li className="row row--3">
      <ol className="parks" type="A">
        <li className="park">
          <input type="checkbox" id="3A" />
          <label for="3A">3A</label>
        </li>
        <li className="park">
          <input type="checkbox" id="3B" />
          <label for="3B">3B</label>
        </li>
        <li className="park">
          <input type="checkbox" id="3C" />
          <label for="3C">3C</label>
        </li>
        <li className="park">
          <input type="checkbox" id="3D" />
          <label for="3D">3D</label>
        </li>
      </ol>
    </li>
    <li className="row row--4">
      <ol className="parks" type="A">
        <li className="park">
          <input type="checkbox" id="4A" />
          <label for="4A">4A</label>
        </li>
        <li className="park">
          <input type="checkbox" id="4B" />
          <label for="4B">4B</label>
        </li>
        <li className="park">
          <input type="checkbox" id="4C" />
          <label for="4C">4C</label>
        </li>
        <li className="park">
          <input type="checkbox" id="4D" />
          <label for="4D">4D</label>
        </li>
      </ol>
    </li>
    <li className="row row--5">
      <ol className="parks" type="A">
        <li className="park">
          <input type="checkbox" id="5A" />
          <label for="5A">5A</label>
        </li>
        <li className="park">
          <input type="checkbox" id="5B" />
          <label for="5B">5B</label>
        </li>
        <li className="park">
          <input type="checkbox" id="5C" />
          <label for="5C">5C</label>
        </li>
        <li className="park">
          <input type="checkbox" id="5D" />
          <label for="5D">5D</label>
        </li>
      </ol>
    </li>
    <li className="row row--6">
      <ol className="parks" type="A">
        <li className="park">
          <input type="checkbox" id="6A" />
          <label for="6A">6A</label>
        </li>
        <li className="park">
          <input type="checkbox" id="6B" />
          <label for="6B">6B</label>
        </li>
        <li className="park">
          <input type="checkbox" id="6C" />
          <label for="6C">6C</label>
        </li>
        <li className="park">
          <input type="checkbox" id="6D" />
          <label for="6D">6D</label>
        </li>
      </ol>
    </li>
    <li className="row row--7">
      <ol className="parks" type="A">
        <li className="park">
          <input type="checkbox" id="7A" />
          <label for="7A">7A</label>
        </li>
        <li className="park">
          <input type="checkbox" id="7B" />
          <label for="7B">7B</label>
        </li>
        <li className="park">
          <input type="checkbox" id="7C" />
          <label for="7C">7C</label>
        </li>
        <li className="park">
          <input type="checkbox" id="7D" />
          <label for="7D">7D</label>
        </li>
      </ol>
    </li>
    <li className="row row--8">
      <ol className="parks" type="A">
        <li className="park">
          <input type="checkbox" id="8A" />
          <label for="8A">8A</label>
        </li>
        <li className="park">
          <input type="checkbox" id="8B" />
          <label for="8B">8B</label>
        </li>
        <li className="park">
          <input type="checkbox" id="8C" />
          <label for="8C">8C</label>
        </li>
        <li className="park">
          <input type="checkbox" id="8D" />
          <label for="8D">8D</label>
        </li>
      </ol>
    </li>
    <li className="row row--9">
      <ol className="parks" type="A">
        <li className="park">
          <input type="checkbox" id="9A" />
          <label for="9A">9A</label>
        </li>
        <li className="park">
          <input type="checkbox" id="9B" />
          <label for="9B">9B</label>
        </li>
        <li className="park">
          <input type="checkbox" id="9C" />
          <label for="9C">9C</label>
        </li>
        <li className="park">
          <input type="checkbox" id="9D" />
          <label for="9D">9D</label>
        </li>
      </ol>
    </li>
  </ol>
  <div className="exit exit--back fuselage">
    
  </div>
</div>
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

export default Table
