import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddPet from "./add-pet.component";
import Pet from "./pet.component";
import PetsList from "./pets-list.component";

import AddUser from "./add-user.component";
import User from "./user.component";
import UsersList from "./users-list.component";

import { useAuth0 } from './auth0-context';

import './button.css';


export default function LoginPage() {

      const { isLoading, user, loginWithRedirect, logout } = useAuth0();
    
    return (
        
        
     
        <Router>
        <div>
         
        <nav className="navbar navbar-expand navbar-dark bg-dark">

        <a href="/" className="navbar-brand">PickMe</a>
            
        <div className="navbar-nav mr-auto">
              
<li className="nav-item">
<Link to={"/"} className="nav-link">About</Link>
</li>
              
<li className="nav-item">
<Link to={"/"} className="nav-link">Contact</Link></li>
        
<li className="nav-item">
<Link to={"/"} className="nav-link">All Pets</Link>
</li>
        
              {/* if there is no user. show the login button */}

        
              {!isLoading && !user && (
                <button onClick={loginWithRedirect} className="navbar-item">
                  Login
                </button>
              )}



              {/* if there is a user. show user name and logout button */}
              

{
    
    
    
    
    !isLoading && user && (
                <>
                  

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
        
        
            
    <button className="navbar-item"><img style={{width:"30px", marginLeft:"200px"}} src={user.picture} alt="My Avatar" /> {user.name}</button>
    

    
    
    
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="navbar-item"
                  >
                    Logout
                  </button>
                </>
              )}
        
              
            
</div>
</nav>

          <div className="container mt-3">
            <Switch>
              
<Route exact path= "/pets" component={PetsList} />
<Route exact path="/add" component={AddPet} />
<Route path="/pets/:id" component={Pet} />
        
<Route exact path="/users"component={UsersList} />
<Route exact path="/addUser" component={AddUser} />
<Route path="/users/:id" component={User} />


        </Switch>
          </div>
        </div>
      </Router>
        
    );
  }
