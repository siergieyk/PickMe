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


import MainPage from "./main-page.component";
import LoginPage from "./login-page.component";

import { useAuth0 } from './auth0-context';

class UserProfile extends Component {
  render() {
    return (
        

        
        <div>
        <h1>User Profile</h1>
            <div style={{float:'left'}}>
    <AddUser/>
        </div>
    <div style={{float:'right'}}>
    <UsersList/>
        </div>
    </div>
    
    );
  }
}

export default UserProfile;