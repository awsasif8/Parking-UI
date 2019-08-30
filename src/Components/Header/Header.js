import React, { Component } from 'react';
import Logo from '../../Assets/Images/Logo.png'
import { Link, withRouter } from 'react-router-dom';


class Header extends Component {
    selectedLang = (event) => {
        console.log(event.target.value);
        const { i18n } = this.props;
        i18n.changeLanguage(event.target.value);
    }
    render() {
        console.log("props of header",this.props )
        let { t } = this.props;
        return (
            <div>
                <div style={{ backgroundColor: 'orangered', color: '#fff' }}>
                    <img src={Logo} alt='not found' width="150px" height="100px" onClick={() => this.props.redirect('/', this.props.history)}></img>
                        <span className='' style={{ color: '#fff', fontSize: '30px', margin: '30%',fontStyle: 'italic' }}>HCL Parking System</span>
                    {/* {
                        this.props.isLoggedIn ?
                            <span ><button className="bt" onClick={() => this.props.redirect('/logout', this.props.history)} data-toggle="tooltip" title="Logout" >Logout</button></span> :
                            <span><button className="bt" onClick={() => this.props.redirect('/login', this.props.history)} data-toggle="tooltip" title="Login" >Login</button></span>
                    } */}

                    {/* <span><Link to="/register" data-toggle="tooltip" title="Register" className="link2">Create Account</Link></span> */}
                    
                    {/* <span><select className="drp" onChange={this.selectedLang}>
                        <option value="en">English</option>
                        <option value="sp">Spanish</option>
                    </select></span> */}
                </div>

            </div>  
        )
    }
}
export default withRouter(Header);
