import React , {Component} from 'react';
import './App.css';
import { withRouter, HashRouter, Switch, Route } from 'react-router-dom'
import Table from './Components/Table/Table'
import Header from './Components/Header/Header';
import { Register } from './Components/Register/Register';
import { Login } from './Components/Login/Login';
import VIPDashboard from './Components/VIPDashboard/VIPDashboard';
import RegDashboard from './Components/RegDashboard/RegDashboard';
import Logout from './Components/Logout/Logout'

class App extends Component {
  constructor(props) {
    super(props);
    // const { i18n } = this.props;
    // i18n.changeLanguage('en');
    this.state={
      isLoggedIn: false,
      data:{}
    }
  }
  redirect=(page, history)=> {
    history.push(page);
  }

  validateUser = (isLoggedIn)=> {
    this.setState({isLoggedIn});
  }
  getuserData =(data,props)=>{
    this.setState({data});
    console.log(data);
  }
  render(){
    return (
      <div className="App">  
        <HashRouter>
         <Header redirect={this.redirect} isLoggedIn={this.state.isLoggedIn} />
          <Switch> 
             <Route path='/table' exact component={Table} />
             <Route path='/register' exact component={Register} />
             <Route path='/vipdashboard' exact component={VIPDashboard} />
             <Route path='/logout' exact component={Logout} />
             {/* <Route path='/login' component={()=><Login validateUser={this.validateUser} redir/>}  /> */}
             <Route path='/login' exact component={Login} />
             <Route path='/regDashboard' exact component={RegDashboard} />
          </Switch>    
        </HashRouter>
      </div>
    );

  }
  
}


export default App;
