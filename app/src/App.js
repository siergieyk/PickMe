import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddPet from "./components/add-pet.component";
import Pet from "./components/pet.component";
import PetsList from "./components/pets-list.component";

import AddUser from "./components/add-user.component";
import User from "./components/user.component";
import UsersList from "./components/users-list.component";

class App extends Component {
  render() {
    return (
     
        <Router>
        <div>
         
        <nav className="navbar navbar-expand navbar-dark bg-dark">

        <a href="/pets" className="navbar-brand">PickMe</a>
            
        <div className="navbar-nav mr-auto">
              
<li className="nav-item">
<Link to={"/pets"} className="nav-link">Pets</Link>
</li>
              
<li className="nav-item">
<Link to={"/add"} className="nav-link">Add Pet</Link></li>
        
<li className="nav-item">
<Link to={"/users"} className="nav-link">Users</Link>
</li>
              
<li className="nav-item">
<Link to={"/addUser"} className="nav-link">Add User</Link></li>
            
</div>
</nav>

          <div className="container mt-3">
            <Switch>

<Route exact path={["/", "/pets"]} component={PetsList} />
<Route exact path="/add" component={AddPet} />
<Route path="/pets/:id" component={Pet} />
        
<Route exact path={["/", "/users"]} component={UsersList} />
<Route exact path="/addUser" component={AddUser} />
<Route path="/users/:id" component={User} />

        </Switch>
          </div>
        </div>
      </Router>
        
    );
  }
}

export default App;
