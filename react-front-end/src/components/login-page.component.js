import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddPet from "./add-pet.component";
import Pet from "./pet.component";
import PetsList from "./pets-list.component";

import AddUser from "./add-user.component";
import User from "./user.component";
import UsersList from "./users-list.component";

import ImageForm from "./image-form";
import Pickme from "./pickme"

import { useAuth0 } from './auth0-context';

import './button.css';
import '../App.css';

import UserProfile from './user-add-list.component';
import PetProfile from './pet-add-list.component';
import AllPetsList from "./all-pets-list.component";
import About from "./about.page";
import Contact from "./contact.page"


export default function LoginPage() {

      const { isLoading, user, loginWithRedirect, logout } = useAuth0();
    
    return (
    
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/main" className="navbar-brand">PickMe</a>

          <div className="navbar-nav mr-auto">

          <li className="nav-item">
            <Link to={"/Pickme"} className="nav-link">PickMe</Link>
            </li>

            <li className="nav-item">
            <Link to={"/about"} className="nav-link">About</Link>
            </li>

            <li className="nav-item">
            <Link to={"/ImageForm"} className="nav-link">Upload</Link>
            </li>
                          
            <li className="nav-item">
            <Link to={"/contact"} className="nav-link">Contact</Link></li>
                    
            <li className="nav-item">
            <Link to={"/all-pets-list"} className="nav-link">All Pets</Link>
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
<Link to={"/petprofile"} className="nav-link">Pet Profiles</Link></li>
        
        
<li className="nav-item">
<Link to={"/userprofile"} className="nav-link">User Profile</Link></li>


        
        
            
    <button className="navbar-item"><img style={{width:"30px"}} src={user.picture} alt="My Avatar" /> {user.name}</button>
    
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
              <Route exact path="/main" component={Pickme} />
              <Route exact path="/all-pets-list" component={AllPetsList} />
              <Route exact path="/petprofile" component={PetProfile} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route path="/pets/:id" component={Pet} />
              <Route exact path="/ImageForm" component={ImageForm} />
              <Route path="/users/:id" component={User} />
              <Route path="/userprofile" component={UserProfile} />
            </Switch>
          </div>
        </div>
      </Router>
        
    );
  }
